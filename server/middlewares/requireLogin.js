const jwt = require('jsonwebtoken');
const User = require('../models/User');


module.exports = (req,res,next) => {

    const{authorization} = req.headers;

    console.log(req.headers,'header2')

    if(!authorization){

        res.status(401).json({error:"you must be authorized/logged in"})
    }

    console.log(req.headers,'headers2')

    const token = authorization.replace('Bearer ',"")


    console.log(token,"this is the token")

    jwt.verify(token, process.env.JWT_SECRET, (err,payload) => {

  console.log(payload)
        if(err){
            console.log(payload,token,"toekamre")
            res.status(401).json({error:"you must be logged in"})
        }


        const {id} = payload;

        User.findById(id).then(userData => {
 
              req.user = userData
              next()


        })

     
    })


}