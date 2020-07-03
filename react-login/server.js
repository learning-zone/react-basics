const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const routes = require('./utils/routes');
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
        password: 'admin'
    }
    jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
        // Store generated token in localStorge()
        res.json({
            token
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
                message: 'POST Created...',
                authData
            });
        }
    });
});


/**
 * FORMAT OF TOKEN
 * Authorization: Bearer <access_token>
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function verifyToken(req, res, next) {
    //Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next Middleware
        next();
    } else {
        //forbidden
        res.sendStatus(403);
    }
}

// REGISTER API HERE
app.get('/api/get/user', routes);
app.post('/api/post/user', routes);


const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`React App Listening at http://localhost:3000`);
});
module.exports = app;
