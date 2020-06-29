const express = require('express');
const router = express.Router();
const sql = require('mssql');
const config = require('./config');

/**
 * GET USER DETAILS
 */
router.get('/api/get/user', function(req, res, next) {

    sql.connect(config, function(err){
        if(err) console.log(err)

        var request = new sql.Request();

        const smt = `SELECT TOP 100 [name]
                        ,[email]
            FROM [sales].[customers] ORDER BY [id]`;

        request.query(smt, function(err, recordset) {
            if(err) console.log(err)

            res.send(recordset);
        });
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

        const smt = `INSERT INTO [sales].[customers] (name, email) VALUES (@name, @email)`;

        request.query(smt, function(err, recordset) {
            if(err) console.log(err)

            res.send(recordset);
        });
    });
});

module.exports = router;
