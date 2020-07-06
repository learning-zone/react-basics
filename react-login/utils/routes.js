const express = require('express');
const router = express.Router();
const sql = require('mssql');
const jwt = require('jsonwebtoken');
const config = require('./config');
const verifyToken = require('./verifyToken');


/**
 * USER LOGIN 
 */
router.post('/api/post/login', (req, res) => {
    // Verify the user details from DB 
    const user = {
        email: req.body.formData.email || 'kumar_prad@hcl.com',
        password: req.body.formData.password || 'root'
    }
    // Reference: https://github.com/auth0/node-jsonwebtoken
    jwt.sign({user}, 'secretkey', { expiresIn: '60s' }, (err, token) => {
        res.json({
            token: token
        });
    });
});


/**
 * GET USER DETAILS
 */
router.get('/api/get/user', verifyToken, function(req, res, next) {

    jwt.verify(req.token, 'secretkey', (err, authData) => {
      if(err) {
        res.sendStatus(403);
      } else {

        sql.connect(config, function(err){
            if(err) console.log(err)
    
            var request = new sql.Request();
    
            const smt = `SELECT TOP 100 [name]
                            ,[email]
                FROM [BFEnterprise].[webui].[TEST_USERS] ORDER BY [id]`;
    
            request.query(smt, function(err, recordsets) {
                if(err) console.log(err)
    
                res.send(recordsets);
                console.log('authData: '+authData);
            });
        });
      }
   });
});

/**
 * USER POST REQUEST
 */
router.post('/api/post/user', function(req, res, next) {

    sql.connect(config, function(err){
        if(err) console.log(err)

        var request = new sql.Request();

        request.input('name', sql.VarChar, req.body.formData.name);
        request.input('email', sql.VarChar, req.body.formData.email);

        const smt = `INSERT INTO [BFEnterprise].[webui].[TEST_USERS] (name, email) VALUES (@name, @email)`;

        request.query(smt, function(err, recordset) {
            if(err) console.log(err)

            res.send(recordset);
        });
    });
});

module.exports = router;
