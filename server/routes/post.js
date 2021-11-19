const express = require('express');
const Post = require('../models/Post');
const requireLogin = require('../middlewares/requireLogin');

const router = express.Router()




router.post('/createPost',requireLogin,(req,res) => {

    const {title,body} = req.body;

    if(!title || !body) {
        res.status(422).json({error:'Please add all the fields'})
    }

    console.log(req.user)
    res.send('ok')


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













