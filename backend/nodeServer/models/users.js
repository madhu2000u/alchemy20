'use strict';

const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    alc_id: {type: String, required:true, unique:true},
    email: {type:String, unique:true},
    hashed_password: String,
    name: String,
    mobile: String,
    college: String,
    dept: String,
    year_of_study: String,
    accommodation: Boolean,
    acc_active: Boolean,
    registered_events: [String]

})

//mongoose.connect('mongodb://localhost:27017/alchemy-20-db', ({useNewUrlParser:true, useUnifiedTopology:true})).then(()=>{console.log('Connected to users alchemy db')}).catch((err)=>{console.log('Error connection to db - ', err)})

module.exports=mongoose.model('users', userSchema)