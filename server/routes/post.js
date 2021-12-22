const express = require('express');
const Post = require('../models/Post');
const requireLogin = require('../middlewares/requireLogin');

const router = express.Router()


router.get('/getposts',requireLogin,(req,res)=>{
     
    Post.find().populate('postedBy','name').select('-_id')
    .then(posts => res.json({posts:posts}))

  
})




router.post('/createPost',requireLogin,(req,res) => {

    const {title,body,pic} = req.body;

    if(!title || !body || !pic) {
        res.status(422).json({error:'Please add all the fields'})
    }


    // req.user.password = undefined;


    const  post = new Post({
        title:title,
        body,
        postedBy:req.user,
        photo:pic

    })


    post.save().then(result => {

     res.json({post:result})
    })
    .catch(err => {
        console.log(`err is ${err}`)
    })


})


router.get('/mypost',requireLogin ,(req,res) => {

    console.log(req.user.id,'========?')
,

    Post.find({postedBy:req.user.id}).populate('postedBy',"_id name")
    .then(mypost => {
        res.json({mypost:mypost})
    })
    .catch(err => {
        console.log(err)
    })




})

 router.put('/like', requireLogin,(req,res) => {

    Post.findByIdAndUpdate(req.body.postId,{
        $push:{likes:req.user._id}
    },{new:true})
    .exec((err,result)=>{
         if(err){
             return res.status(422).json({error:err})
         }
    })



 })

module.exports = router;













