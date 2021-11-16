const mongoose = require('mongoose');




   const User = new mongoose.Schema ({

      name:{
          type:String,
          required:true,
          trim:true
      },

      password:{
          type:String,
          required:true,
          trim:true,
          maxlength:7
      },
       
      image:{
          data:Buffer,
          contentType:String
      },
      email:{
          type:String,
          required:true,
          trim:true
      }















   })

    const UserSchema  = mongoose.model('User',User)