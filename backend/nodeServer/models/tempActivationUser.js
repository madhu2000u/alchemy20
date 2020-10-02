'use strict';

const mongoose=require('mongoose')

const tempActivation=new mongoose.Schema({
    
    user_id: String,
    verification_token:String
    
})

//mongoose.connect('mongodb://localhost:27017/alchemy-20-db', ({useNewUrlParser:true, useUnifiedTopology:true})).then(()=>{console.log('Connected to notific alchemy db')}).catch((err)=>{console.log('Error connection to db - ', err)})

module.exports=mongoose.model('tempActivation', tempActivation)