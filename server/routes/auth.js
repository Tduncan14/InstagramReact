const express = require('express');


 const router =  express.Router()


 router.get('/auth', (req,res) => {


    const {name,email,password} = req.body
 
    if(!email || !password || !name){

        res.json({error:"please add all the fields"})

        res.json({message:"successfully"})
    }

    res.send('hello world')




 })


 router.post('/signup',  async (req,res)  => {

    

     

 })



 module.exports = router