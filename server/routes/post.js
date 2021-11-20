const express = require('express');
const Post = require('../models/Post');
const requireLogin = require('../middlewares/requireLogin');

const router = express.Router()


router.get('/getposts',(req,res)=>{
     
    Post.find().populate('postedBy','name').select('-_id')
    .then(posts => res.json({posts:posts}))

  
})




router.post('/createPost',requireLogin,(req,res) => {

    const {title,body} = req.body;

    if(!title || !body) {
        res.status(422).json({error:'Please add all the fields'})
    }

    console.log(req.user)


    req.user.password = undefined;


    const  post = new Post({
        title:title,
        body,
        postedBy:req.user
    })


    post.save().then(result => {

     res.json({post:result})
    })
    .catch(err => {
        console.log(`err is ${err}`)
    })


})





module.exports = router;













