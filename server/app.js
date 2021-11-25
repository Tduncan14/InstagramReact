const express = require('express');
const dot= require('dotenv');
const mongoose = require('mongoose');
const userModel = require('./models/User');
const postModel = require('./models/Post');
const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');

 
const app =   express()

dot.config()


mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true,useUnifiedTopology:true
}).then(()=> console.log('connect to database'));
 
app.use(express.json())

app.use('/api',authRouter)
app.use('/api',postRouter)



const PORT =  process.env.PORT || 8000




app.listen(PORT,() => {


    console.log(`hello running on port ${PORT}`)
})







