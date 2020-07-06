const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./utils/routes');
const app = express();


app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// REGISTER API HERE
app.post('/api/post/login', routes);
app.get('/api/get/user', routes);
app.post('/api/post/user', routes);


app.listen(process.env.PORT || 3000, () => {
    console.log(`React App Listening at http://localhost:3000`);
});
module.exports = app;
