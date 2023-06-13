var express = require('express');
var app = express();
const path = require('path');
// set the view engine to ejs

app.set('views', path.join(__dirname, '/var/task/views'));
app.set('view engine','ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('login');
});



app.listen(3000);
console.log('Server is listening on port 3000');