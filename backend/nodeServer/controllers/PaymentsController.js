const payment=require('../models/payments')
const events=require('../models/events')
const User=require('../models/users')
const razorpay=require('razorpay')


const razorpayInstance=new razorpay({
    key_id: process.env.rzp_key_id,
    key_secret: process.env.rzp_key_secret
})

exports.createOrder= async (req, res)=>{

    const workshop=await events.findOne({id:req.event_id}, (err, result)=>{
        if(err) console.log("createOrder Error - ", err)        
    })

    if(workshop.event_type!='workshop') return res.status(403).json({message:"Event provided it not ot type workshop"})

    console.log("this is the event in payments controller - ",  workshop)

    const options={
        amount: (parseInt(workshop.event_cost)*100).toString(),     //razorpay works with the smallest unit of currenty that is paise, so we need to pass in the amount in paise
        currency:'INR',
        receipt:'rcptid_' + Math.random().toString(36).substr(2, 9)

    }
    
    razorpayInstance.orders.create(options).then((result)=>{
        console.log("Create order creted, resonse - ", result)
        res.status(200).json({
            id: result.id,
            amount:result.amount,
            currency: result.currency
        })
    }).catch((err)=>{console.log("Create order not created, error - ", err)})
    


}