const express = require('express');
const router = express.Router();
const sql = require("mssql");
const config = require("./config");


/**
 * API to GET User Details
 */
router.get('/api/get/user', function (req, res, next) {
   
    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        const stmt = `SELECT TOP 100 [name] 
                        ,[email]
                    FROM [BFEnterprise].[webui].[TEST_USERS] ORDER BY [id]`;

        request.query(stmt, function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});


/**
 * API to ADD User Details
 */
router.post('/api/post/user', function (req, res, next) {
   
    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        console.log(req.body);
         
           
        // query to the database and get the records
        request.input('name', sql.VarChar, req.body.userDetails.name);
        request.input('email', sql.VarChar, req.body.userDetails.email);
        const stmt = `INSERT INTO [BFEnterprise].[webui].[TEST_USERS] (name, email) VALUES (@name, @email)`;

        request.query(stmt, function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});
module.exports = router;
