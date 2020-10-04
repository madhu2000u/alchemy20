'use strict';

const mongoose=require('mongoose')

const eventsSchema=new mongoose.Schema({
    
    event_type: String,
    event_name:String,
    event_description:String,
    event_img:String,
    event_date:String,
    event_cost:String,
    event_contacts:String
    
})

//mongoose.connect('mongodb://localhost:27017/alchemy-20-db', ({useNewUrlParser:true, useUnifiedTopology:true})).then(()=>{console.log('Connected to notific alchemy db')}).catch((err)=>{console.log('Error connection to db - ', err)})

module.exports=mongoose.model('events', eventsSchema)