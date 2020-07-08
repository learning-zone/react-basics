const express = require('express');
const router = express.Router();
const sql = require('mssql');
const jwt = require('jsonwebtoken');
const crypto = require('crypto')
const config = require('./config');
const verifyToken = require('./verifyToken');
const { password } = require('./config');

/**
 * USER LOGIN 
 */
router.post('/api/post/login', function(req, res, next) {

    // MD5() for hashing
    let hash = crypto.createHash('md5').update(req.body.formData.password).digest("hex")
    
    const user = {
        email: req.body.formData.email,
        password: hash
    }

    // Verify the user details from DB
    sql.connect(config, function(err){
        if(err) console.log(err)

        var request = new sql.Request();

        request.input('email', sql.VarChar, req.body.formData.email);
        request.input('password', sql.VarChar, hash);

        const smt = `SELECT COUNT(id)
            FROM [BFEnterprise].[webui].[TEST_USERS]
            WHERE [email] = @email AND password = @password`;

        request.query(smt, function(err, recordset) {
            if(err) console.log(err)

            if(recordset.rowsAffected > 0) {
            
                // Reference: https://github.com/auth0/node-jsonwebtoken
                jwt.sign({user}, 'secretkey', { expiresIn: '1h' }, (err, token) => {
                    res.json({
                        accessToken: token
                    });
                });
            }
            //res.send(recordset);
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
                console.log('authData: '+JSON.stringify(authData));
                res.send(recordsets);
            });
        });
      }
   });
});

/**
 * USER POST REQUEST
 */
router.post('/api/post/user', verifyToken, function(req, res, next) {

    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) {
          res.sendStatus(403);
        } else {

           sql.connect(config, function(err){
               if(err) console.log(err)
       
               var request = new sql.Request();
               let password = '63a9f0ea7bb98050796b649e85481845';
       
               request.input('name', sql.VarChar, req.body.formData.name);
               request.input('email', sql.VarChar, req.body.formData.email);
               request.input('password', sql.VarChar, password);
       
               const smt = `INSERT INTO [BFEnterprise].[webui].[TEST_USERS] (name, email, password) VALUES (@name, @email, @password)`;
       
               request.query(smt, function(err, recordset) {
                   if(err) console.log(err)
                   console.log('authData: '+JSON.stringify(authData));
                   res.send(recordset);
               });
           });
        }
    });
});

module.exports = router;
