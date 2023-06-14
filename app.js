var express = require('express');
var app = express();
const path = require('path');
// const fs = require("fs");
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
    res.send(__dirname);

    fs=require('fs')
    fs.readdir("/", (err,filename)=>
      // res.send(filename, 'root directory')
      res.status(200).send(filename, 'Root directory')
    );

    fs.readdir("var/", (err,filename)=>console.log(filename, 'views directory'))
    console.log(__dirname, 'test');
  });

app.listen(3000);
console.log('Server is listening on port 3000');




  
