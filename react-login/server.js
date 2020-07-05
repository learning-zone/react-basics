const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const routes = require('./utils/routes');
const verifyToken = require('./utils/verifyToken');
const app = express();


app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Login API
 */
app.post('/api/login', (req, res) => {
    //GET the user details from Database
    const user = {
        email: 'pradeep.vwa@gmail.com',
        password: 'root'
    }
    // Reference: https://github.com/auth0/node-jsonwebtoken
    jwt.sign({user}, 'secretkey', { expiresIn: '60s' }, (err, token) => {
        res.json({
            token: token
        });
    });
});

 
/**
 * Use generated token to verify any posts
 */
app.post('/api/posts', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: 'POST Successful',
                authData
            });
        }
    });
});


// REGISTER API HERE
app.get('/api/get/user', routes);
app.post('/api/post/user', routes);


const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`React App Listening at http://localhost:3000`);
});
module.exports = app;
