const express = require('express');
const app = express();
const userModel = require('./usermodel');

app.get('/',function(req,res){
    res.send("Hey")
})
app.get('/create',async (req,res) => {
    let user = await userModel.create({
        name : 'Yadnesh Narawade',
        email: 'yadnesh@gmail.com',
        age:19
    })
    res.send(user)
})

app.get('/update',async (req,res) => {
    let updatedUser = await userModel.findOneAndUpdate({name :'Yadnesh'},{email : 'y@gmail.com' },{new : true});
    res.send(updatedUser)
})

app.get('/readAll',async (req,res) => {
// fetchs all list of users
    let users = await userModel.find();
    res.send(users)
})

app.get('/readOne',async (req,res) => {
        // this will always return a list user
        let users = await userModel.find({name:'Yadnesh'});
        // this will return single object of user if present and null when not present 
        // this will find first occurance and return it 
         let user = await userModel.findOne({name:'Yadnesh'});
        res.send(users)
})

app.get('/delete', async (req,res)=>{
    let deletedUser = await userModel.findOneAndDelete({userEmail:"yadnesh@gmail.com"})
    res.send(deletedUser);
});

app.listen(3000)