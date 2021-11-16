const express = require('express');
const User = require('../models/User');
const bcrypt  = require('bcryptjs')

 const router =  express.Router()


 router.get('/auth', (req,res) => {


    const {name,email,password} = req.body
 
    if(!email || !password || !name){

        res.json({error:"please add all the fields"})

        res.json({message:"successfully"})
    }


    const user = User ;

     user.name = req.body.name;
     user.email = req.body.email;
     user.pass = req.body.password;


     user.save((err) => {

        if(err){
           res.send('data cannot be save')
        }


        res.send(user)

     })

    res.json(user)




 })


 router.post('/signup',(req,res) => {

    const {name,email,password} = req.body


    if(!email || !password || !name){

        return res.status(422).json({error:"please complete all fields"})
    }


        User.findOne({email:email})
        .then((savedUser) => {

            if(savedUser){
                 return res.status(422).json({error:"user already exists with that email"})
            }

            bcrypt.hash(password,12)
             .then(hashedpassword =>{


                const user = new User(req.body)

                user.save(err => {
                    if(err){
                     console.log(err)
                     res.status(400).json({message:`this is the ${err}`})
                    }
    
    
                    res.status(200).json({user})
                })
            }).catch(err =>{
    
                console.log(err)
            })
    



             })


          








 })
    
//    const {name,email,password} = req.body

//    console.log(name,email,password, 'hello')

//    res.status(200).json({
//        name,
//        email,
//        password
//    })





//    const user = User;

//    user.name = req.body.name
//    user.email = req.body.email
//    user.password = req.body.password



//    await user.save();
     


 



 module.exports = router 