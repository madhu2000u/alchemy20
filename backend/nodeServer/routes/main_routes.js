const express=require('express')
const main_router=express.Router();
const notific=require('../models/notifics')
const utils=require('../functions/utils')

const notific_route='/allNotific'
const events_route='/allEvents'


main_router.get(events_route, (req, res)=>{
    res.status(200)
    res.json("events GET working")


})


main_router.post(events_route, (req, res)=>{
    res.send('events POST working')

})


main_router.get(notific_route, utils.validateGetapi, (req, res)=>{
    
    notific.find({}).then((result)=>{
        res.status(200)
        res.send(result)
    })
    

})

main_router.post(notific_route, (req, res)=>{
    const body=req.body
    if(!body.notif_heading || !body.notif_desc || !notif_posted_on){
        res.status(400)
        res.json({message: 'One or more request parameters not found'})
    }else{
        notific.create(req.body).then((result)=>{res.status(201); res.send(result)}).catch((err)=>{res.status(400); res.send(err)})
    }
    
    
})

module.exports=main_router