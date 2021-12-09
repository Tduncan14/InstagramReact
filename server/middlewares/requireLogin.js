const jwt = require('jsonwebtoken')
const User = require('../models/User');

module.exports = (req,res,next)=>{


    console.log(req)

    const {authorization} = req.headers


    console.log(authorization,'wbat')
    //authorization === Bearer ewefwegwrherhe
    if(!authorization){
       return res.status(401).json({error:"you must be logged in"})
    }
    const token = authorization.replace("Bearer ","")
    jwt.verify(token,process.env.JWT_SECRET,(err,payload)=>{
        if(err){
         return   res.status(401).json({error:"you must be logged in"})
        }

        console.log('this is the req',req)
        console.log(payload,'payload')
        let {id} = payload

          console.log(id,'new variable')
        User.findById(id).then(userdata=>{
            req.user = userdata

            console.log(id,'the stripe')

            console.log(req.user,'the req ueser')


            console.log({userdata})
            next()
        })
        
        
    })
}