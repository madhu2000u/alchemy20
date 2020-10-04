const express=require('express')
const main_router=express.Router();
const notific_coll=require('../models/notifics')
const utils=require('../functions/utils')
const user_token=require('../models/user_tokens')
const users=require('../models/users')
const events=require('../models/events')

const mainRoutes = require('./endpoints')


//////////Galary related routes START/////////////////////////
//main_router.get()

//////////All Events related routes START///////////////////
main_router.get(mainRoutes.events_route, utils.validateGetapi, (req, res)=>{
    events.find().then((events_result)=>{
        res.status(200).json(events_result)
    }).catch((events_err)=>{
        res.status(500).json(events_err)
    })
})


main_router.post(mainRoutes.events_route, utils.validatePostapi, (req, res)=>{
    const body=req.body
    if(!body.event_type || !body.event_name || !body.event_description || !body.event_img || !body.event_date || !body.event_cost || !body.event_contacts){
        res.status(400).json({message:"One or more parameters null"})
    }else{
        // const event=new events({
        //     event_id:body.event_id,
        //     event_type:body.event_type,
        //     event_name:body.event_name,
        //     event_description:body.event_description,
        //     event_img:body.event_img,
        //     event_cost:body.event_cost,
        //     event_contacts:body.event_cost
        // })

        events.create(body).then((event_result)=>{
            res.sendStatus(201)
        }).then((event_err)=>{
            res.status(500).json(event_err)
        })
    }
    //res.send('events POST working')

})

main_router.put(mainRoutes.events_route, utils.validatePostapi, (req, res)=>{  //HTTP put is for update, and utils.validatePostapi because it for use for the admin prople, so wheter it is a post or a put request doesnt matter the api_key if it is validatePostapi for put instead of a separate utils.validatePutapi
    //console.log("content-type header - ", req.headers["content-type"])
    if(req.headers['content-type']!="application/json"){res.status(400).json({message:"content-type header missing"});console.log("content-type param missing- ", req.headers['content-type'] )}
    else if(!req.headers['event_id']){res.status(400).json({message:"event id parameter missing"})}    //event id is the _id of the events document, when clienc does GET for events, the _id is also returned.    
    else{
        events.updateOne({"_id":req.headers['event_id']}, req.body).then((event_update_result)=>{
            console.log("Inside events PUT .then - ",event_update_result)
            if(event_update_result!=null){
                res.status(200).json({message:"Event updated"})
            }
        }).catch((event_update_err)=>{
            console.log("Events PUT .catch error - ", event_update_err)
            res.status(404).json({message:"Event with given id doesn't exist or Internal server error"})
        })
    }
})

main_router.delete(mainRoutes.events_route, utils.validatePostapi, (req, res)=>{
    if(req.headers['content-type']!="application/json"){res.status(400).json({message:"content-type header missing"});console.log("content-type param missing- ", req.headers['content-type'] )}
    else if(!req.headers['event_id']){res.status(400).json({message:"event id parameter missing"})}
    else{
        events.deleteOne({"_id":req.headers['event_id']}).then((event_delete_result)=>{
            console.log("Event delete result - ", event_delete_result)
            res.status(200).json({message:"Event deleted"})
        }).catch((event_delete_err)=>{
            console.log("Event delete error -  ", event_delete_err)
            res.status(500).json(event_delete_err)
        })
    }

    
})
////////All Events related routes END////////////





/////All Notification routes START (This is for temporary classification only. Finally before production deploment, routes will be organized separately in their respective route JS source file for better readability and documentation)


/////All Notification routes START (This is for temporary classification only. Finally before production deploment, routes will be organized separately in their respective route JS source file for better readability and documentation)

main_router.get(mainRoutes.notific_route, utils.validateGetapi, (req, res)=>{
    
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

main_router.post(mainRoutes.notific_route, utils.validatePostapi, (req, res)=>{
    const body=req.body
    if(!body.notif_heading || !body.notif_desc || !body.notif_posted_on){
        res.status(400)
        res.json({message: 'One or more request parameters not found'})
    }else{
        notific_coll.create(req.body).then((result)=>{res.status(201);/* res.send(result)*/}).catch((err)=>{res.status(500); res.send(err)})
    }
    
    
})

main_router.delete(mainRoutes.notific_route, utils.validatePostapi, (req,res)=>{       //the utils.validatePostapi is called a middleware which means, in JS, the sequence of function execution after reaching this route will be(in this case stored as a stack)=>{1st:utils.validatePostapi (the req and res is sent automatically to this middleware), 2nd: the callback function(only when the middleware calles next(), it will go on to execute the next function in stack which is the callback or esle we can just send the response from midleware and leave it.)} we can add as many middleware as wanted eg: router.post(route, middleware1, middleware2, middleware3, (callback function)), but we need to call next() in the middlewar to advance to the next middleware in the stack. 
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

main_router.get('/alcid', (req, res)=>{
    try {
        const header=req.headers['auth_token']
        if(header==null){res.status(400).json({message:"Not logged in"})}
        else{
            user_token.findOne({auth_token: header}).then((user_token_result)=>{
            if(user_token_result==null){res.status(401).json({message:"Unauthorized"})}
            else{
                users.findOne({"_id":user_token_result.user_id}).then((user_result)=>{
                    res.status(200).json({alc_id:user_result.alc_id})
                }).catch((user_err)=>{console.log("Error in alcid user_token - ", user_err);res.status(500).json({message:"Internal server error"})})
            }
            }).catch((user_token_err)=>{
            console.log('Error in alcid user_token - ', user_token_err)
            })
        }                
        
    } catch (error) {
        console.log("Error in alcid route", error)
        
    }

    
    
})


module.exports=main_router
