// authentication and authorization

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');

// cookies
app.use(cookieParser());

app.get('/',function (req,res){
    // setting cookie
    // once set always get carry to each rout automatically
    res.cookie("name" ,"yadnesh")
    res.send("Hey")
});

app.get('/read',function (req,res){
    // reading  cookie
    // once set always get carry to each rout automatically
   console.log(req.cookies);
    res.send("Hey")
});

// bcrypt for encryption and decryption (not decrypt actually we compare both hash values)
app.get('/bcrypt',function (req,res){
    // for encrypting 
   bcrypt.genSalt(10,function(err,salt){
    bcrypt.hash("my_password",salt,function(err,hash){
        console.log(hash);
    });
   });

   // decrypting or comparing both hash and gives true or false 
   // userful for compairing user pass and the user pass saved in DB
   bcrypt.compare('my_password','$2b$10$mL4fHl0IUJsv3W46tkDTu.CMltm2CPISxYvdxA17SGTBDr3RjfP3O',function (err,result) {
    console.log(result);
   })
    res.send("Hey")
});



app.listen(3000);