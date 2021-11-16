const express = require('express');
const dot= require('dotenv');
 
const app =   express()

dot.config()



const PORT =  process.env.PORT || 4000




app.listen(PORT,() => {


    console.log(`hello running on port ${PORT}`)
})







