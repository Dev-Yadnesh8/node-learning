const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');

app.get('/', (req, res) => {
    res.send("Hey how are you!! server is working fine");
});

app.get('/create', async (req, res) => {
    let user = await userModel.create({
        userName: 'yadnesh',
        email: 'abcd@gmail.com',
        age: 19,
        posts: [],

    });

    res.send(user);
});

app.get('/post/create',async (req,res)=>{
  let post =  await postModel.create({
        postData : "Hey how are you",
        user : '669a84a83c6502bf154588ad',
    });

   let user = await userModel.findOne({_id:'669a84a83c6502bf154588ad'});
   user.posts.push(post._id);
   await user.save();

   res.send({post,user});

});

app.listen(3000);