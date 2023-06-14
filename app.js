var express = require('express');
var app = express();
const path = require('path');
const fs = require("fs");
// set the view engine to ejs

// Set the view engine and views directory
app.set('view engine', 'ejs');
app.set('views', './views');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('login');
  const viewsDirectory = path.join(__dirname, 'var/task');

// // Check if the views directory exists
// if (!fs.existsSync(viewsDirectory)) {
//   // Create the views directory
//   fs.mkdirSync(viewsDirectory);
//   console.log('Var directory created successfully.');
// } else {
//   console.log('var directory already exists.');
// }


const sourceFilePath = path.join(__dirname, 'login.ejs');
const destinationFilePath = path.join(__dirname, 'var/task', 'login.ejs');

// Move the file to the views directory
fs.rename(sourceFilePath, destinationFilePath, (err) => {
  if (err) {
    console.error('Error moving file:', err);
  } else {
    console.log('File moved successfully.');
  }
});


});

app.get('/api', function(req, res) {
    res.send(__dirname);

    fs=require('fs')
    fs.readdir("/", (err,filename)=>
      // res.send(filename, 'root directory')
      res.status(200).send(filename, 'Root directory')
    );

    fs.readdir("var/", (err,filename)=>console.log(filename, 'var directory'))
    console.log(__dirname, 'test');
  });

app.listen(3000);
console.log('Server is listening on port 3000');




  
