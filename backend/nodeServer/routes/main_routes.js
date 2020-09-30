const express=require('express')
const main_router=express.Router();
const notific_coll=require('../models/notifics')
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

main_router.delete(notific_route, utils.validatePostapi, (req,res)=>{
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

module.exports=main_router