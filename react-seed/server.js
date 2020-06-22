const path = require('path');
const express = require('express');
const app = express();
const routes = require('./utils/routes');

/**
 * Express Server Configuration for React App
 */
app.use(express.static(path.join(__dirname, 'build')));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})


/**
 * Register Routes
 */
app.get('/api/sitename', routes);
   

//Setting up server
const server = app.listen(process.env.PORT || 3000, () => {
  const host = server.address().address
  const port = server.address().port

  console.log(`React app listening at http://localhost:${port}`)
});

module.exports = app;
