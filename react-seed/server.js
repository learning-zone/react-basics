const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

/**
 * Express Server Configuration for React App
 */
app.use(express.static(path.join(__dirname, 'build')));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})


/**
 * SQL-Server Connection Configuration
 */
app.get('/user', function (req, res) {
   
    const sql = require("mssql");
    const config = require("./utils/config");

    
    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('SELECT TOP 10 [name] FROM [BFEnterprise].[dbo].[ACTION_DEFS]', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

//Setting up server
const server = app.listen(process.env.PORT || 3000, () => {
  const host = server.address().address
  const port = server.address().port

  console.log(`React app listening at http://localhost:${port}`)
});

module.exports = app;
