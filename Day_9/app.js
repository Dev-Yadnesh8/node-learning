const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const userModel = require('./models/user');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('Welcome');
});

app.get('/create', (req, res) => {
    let { userName, email, password, age } = req.body;
    // this will create user and hash it's password using bcrypt
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            let createdUser = userModel.create({
                userName,
                email,
                password: hash,
                age,

            });

            // creating token for user to directly sign in after creating account 
          let token =   jwt.sign({email},'shhhhhhhhh');
          res.cookie('token',token);
        

        });

    });
});

// logout user 
// simply clear the token 
app.post('/logout',function(req,res){
   res.cookie('token','');
});

app.post('/login',function(req,res){
    let user = userModel.findOne({emial : req.body.email});
    if(!user) res.send('Somthing went wrong!!');
    bcrypt.compare(req.body.password ,user.password,(err,result)=>{
        if(!result){
            res.send('Somthing went wrong!!');
        }else{
            let token =   jwt.sign({emai : user.email},'shhhhhhhhh');
            res.cookie('token',token);
            res.send('You can login ');
        }
    });
 });

app.listen(3000);