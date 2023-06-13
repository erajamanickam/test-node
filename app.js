var express = require('express');
var app = express();
const path = require('path');
// set the view engine to ejs

// Set the view engine and views directory
app.set('view engine', 'ejs');
app.set('views', './views');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('login');
});

app.get('/api', function(req, res) {
    res.send("HI1");
  });

app.listen(3000);
console.log('Server is listening on port 3000');