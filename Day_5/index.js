const express = require('express')
const path = require('path')
const app = express()

// form parsers 
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// using ejs as view engine
app.set('view engine','ejs')

app.use(express.static(path.join(__dirname,'Day_5/public')))

app.get('/', function (req, res) {
  res.render('index')
})

// dynamic routing 
app.get('/profile/:userName', function (req, res) {

    res.send("Welcome, "+req.params.userName);
  })

  app.get('/profile/:userName/:age', function (req, res) {

    res.send("Welcome, "+req.params.userName +" of age " + req.params.age);
  })
  

app.listen(3000,function() {
    console.log("Server running");
})