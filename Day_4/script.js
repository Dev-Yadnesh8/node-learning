const express = require('express')
const app = express()

// implementing middelware
app.use(function(req,res,next){
    console.log("Middleware running 1st time");
    next();
});
app.use(function(req,res,next){
    console.log("Middleware running 2nd time");
    next();
})

app.get('/', function (req, res) {
  res.send('Hello World I will become good developer')
})
app.get('/home', function (req, res) {
    res.send('Hello World This is home route ')
})

app.get('/profile', function (req, res,next) {
    return next(new Error("Opps!! something went wrong "));
})

app.use((err,req,res,next)=>{
    res.status(500).send("Something broke!!")
})

app.listen(3000)