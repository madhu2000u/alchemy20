const express=require('express')
const main_router=express.Router();
const notific_coll=require('../models/notifics')
const utils=require('../functions/utils')

const notific_route='/allNotific'
const events_route='/allEvents'


//////////All Events related routes START///////////////////
main_router.get(events_route, (req, res)=>{
    res.status(200)
    res.json("events GET working")


})


main_router.post(events_route, utils.validatePostapi, (req, res)=>{
    
    res.send('events POST working')

})
////////All Events related routes END////////////





/////All Notification routes START (This is for temporary classification only. Finally before production deploment, routes will be organized separately in their respective route JS source file for better readability and documentation)

main_router.get(notific_route, utils.validateGetapi, (req, res)=>{
    
    notific_coll.find({}).then((result)=>{
        res.status(200)
        //console.log(result)
        const list=[]
        for (let i = result.length; i>0; i--) {
            const element = result[i-1];
            console.log('element - ', element)           
            list.push(element)            
        }
        // console.log('list - ', list)        
        res.send(list)
    })
    

})

main_router.post(notific_route, utils.validatePostapi, (req, res)=>{
    const body=req.body
    if(!body.notif_heading || !body.notif_desc || !body.notif_posted_on){
        res.status(400)
        res.json({message: 'One or more request parameters not found'})
    }else{
        notific_coll.create(req.body).then((result)=>{res.status(201); res.send(result)}).catch((err)=>{res.status(400); res.send(err)})
    }
    
    
})

main_router.delete(notific_route, utils.validatePostapi, (req,res)=>{       //the utils.validatePostapi is called a middleware which means, in JS, the sequence of function execution after reaching this route will be(in this case stored as a stack)=>{1st:utils.validatePostapi (the req and res is sent automatically to this middleware), 2nd: the callback function(only when the middleware calles next(), it will go on to execute the next function in stack which is the callback or esle we can just send the response from midleware and leave it.)} we can add as many middleware as wanted eg: router.post(route, middleware1, middleware2, middleware3, (callback function)), but we need to call next() in the middlewar to advance to the next middleware in the stack. 
    const id=req.body.notif_id
    console.log('delete id - ',id)
    notific_coll.deleteOne({_id:id}).then((result)=>{
        console.log('delete - ', result) 
        if(result.n==0){res.status(200); res.json({message:"No notification exists with this id to delete"})}
        else{res.status(200); res.json({message:"Notification deleted"})}
    }).catch((err)=>{
        console.log('delete error - ', err)
        res.status(500)
        res.send("Internal server error")
})
    

})

/////All Notification routes END///////////////////////////////

module.exports=main_router