const express = require('express');
const User = require('../models/User');
const bcrypt  = require('bcrypt');
const jwt = require('jsonwebtoken');
const requireSignin = require('../middlewares/requireLogin');

 const router =  express.Router()

 require("dotenv").config();

 const secret =  process.env.JWT_SECRET


//  router.get('/auth', (req,res) => {


//     const {name,email,password} = req.body
 
//     if(!email || !password || !name){

//         res.json({error:"please add all the fields"})

//         res.json({message:"successfully"})
//     }


//     const user = User ;

//      user.name = req.body.name;
//      user.email = req.body.email;
//      user.pass = req.body.password;


//      user.save((err) => {

//         if(err){
//            res.send('data cannot be save')
//         }


//         res.send(user)

//      })

//     res.json(user)




//  })


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

                req.body.password = hashedpassword


                const user = new User(req.body)

                user.save(err => {
                    if(err){
                     console.log(err)
                     res.status(400).json({message:`this is the ${err}`})
                    }
    
    
                    res.status(200).json({message:"the user was created",user})
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
     

router.post('/signin', (req,res) => {
    console.log(req.body,"test1")
    const {email,password} = req.body

    if(!email || !password){
         
        res.status(422).json({error:"please provide email or password"})
    }


    User.findOne({email:email})
    .then(savedUser => {

        console.log('test2')

        if(!savedUser){
           return  res.status(404).json({error:"user not found"})
        }

        
        console.log('test3')

        bcrypt.compare(password, savedUser.password).then(doMatch => {
             console.log(doMatch,"do match")
            if(doMatch){
                // res.json({message:"success"})

                const token = jwt.sign({id:savedUser._id},secret)


                const{_id,name,email} = savedUser

                
                res.json({token,user:{_id,name,email}})
            }

            else{
                return res.status(422).json({error:"Invalid password or Invalid Email hhh"})
            }
        })
        .catch(err => {
            console.log(error)
        })
    })


})


//  Making a protected route


 
router.get('/protected',requireSignin, (req,res)=> {


     console.log('you have logged in' )
 })


 module.exports = router 