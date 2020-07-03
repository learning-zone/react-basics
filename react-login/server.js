const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

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
app.listen(3000, ()=> console.log(`React App Listening at http://localhost:3000`));
