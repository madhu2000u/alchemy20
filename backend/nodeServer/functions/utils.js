'use strict';

const validator=require('email-validator')

exports.validateUser=(email, password)=>{
    return new Promise((resolve ,reject)=>{
        if(!validator.validate(email)){
            reject({status: 400, message: 'Invalid email'})
        }else{
            resolve({status:200, message: 'Valid email'})
        }
    })   
}

exports.validateGetapi=(req, res, next)=>{
    //console.log('get api - ', process.env)
    const header=req.headers['get_api']
    if(header==process.env.get_api_key){
        next()        
    }else{
        res.status(401)
        res.json("Unauthorized")
    }
}

exports.validatePostapi=(req, res, next)=>{
    //console.log('get api - ', process.env)
    const header=req.headers['post_api']
    if(header==process.env.post_api_key){
        next()        
    }else{
        res.status(401)
        res.json("Unauthorized")
    }

}

