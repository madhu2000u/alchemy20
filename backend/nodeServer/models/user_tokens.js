'use strict';

const mongoose=require('mongoose')

const userTokens=new mongoose.Schema({
    
    user_id: String,        //this user_id is the same as users.js model's _id(which is a unique primary auto-generated key by mongoose).So basically these thow collections are linked ()
    salt:String,
    auth_token:String,
    
})

//mongoose.connect('mongodb://localhost:27017/alchemy-20-db', ({useNewUrlParser:true, useUnifiedTopology:true})).then(()=>{console.log('Connected to notific alchemy db')}).catch((err)=>{console.log('Error connection to db - ', err)})

module.exports=mongoose.model('user_tokens', userTokens)