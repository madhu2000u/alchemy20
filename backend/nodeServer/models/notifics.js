'use strict';

const mongoose=require('mongoose')

const notificSchema=new mongoose.Schema({
    
    notif_heading: String,
    notif_desc:String,
    notif_posted_on: String
})

//mongoose.connect('mongodb://localhost:27017/alchemy-20-db', ({useNewUrlParser:true, useUnifiedTopology:true})).then(()=>{console.log('Connected to notific alchemy db')}).catch((err)=>{console.log('Error connection to db - ', err)})

module.exports=mongoose.model('notific', notificSchema)