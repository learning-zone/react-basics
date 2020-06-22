const express = require('express');
const router = express.Router();
const sql = require("mssql");
const config = require("./config");


/**
 * SQL-Server Connection Configuration
 */
router.get('/api/sitename', function (req, res, next) {
   
    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        const stmt = `SELECT TOP 20 [Sitename] 
                        ,[UndecoratedSitename]
                        ,[SiteURL]
                        ,[ModificationTime]
                    FROM [BFEnterprise].[dbo].[SITENAMEMAP] ORDER BY [Sitename]`;

        request.query(stmt, function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});
module.exports = router;
