'use strict';

const mongoose = require('mongoose');

const paymentsSchema = new mongoose.Schema({
    user_id: {type:mongoose.Schema.Types.ObjectId, required:true, unique:true},
    payments:[
        {
            event_id:{type: mongoose.Schema.Types.ObjectId, required:true, unique:true},
            receipt_id:{type:String, required:true, unique:true},
            order_id:{type:String, required:true, unique:true},
            razorpay_payment_id:String,
            razorpay_order_id:String,
            razorpay_signature:String,
            created_at:String
            
        }
        
    ]
});

//mongoose.connect('mongodb://localhost:27017/alchemy-20-db', ({useNewUrlParser:true, useUnifiedTopology:true})).then(()=>{console.log('Connected to notific alchemy db')}).catch((err)=>{console.log('Error connection to db - ', err)})

module.exports = mongoose.model('payments', paymentsSchema);
