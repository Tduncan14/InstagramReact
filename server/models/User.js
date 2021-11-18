const mongoose = require('mongoose');




   const User = new mongoose.Schema ({

      name:{
          type:String,
          required:true,
       
      },

      password:{
          type:String,
          required:true,
          trim:true,
        
      }, 
       
      image:{
          data:Buffer,
          contentType:String
      },
      email:{
          type:String,
          required:true,
       
      }


   })

    const UserSchema  = mongoose.model('users',User)


    module.exports = UserSchema