'use strict';
const mailer=require('nodemailer')
const validator=require('email-validator')
const crypto =require('crypto')


exports.mailer=(to_email, sub, html)=>{
    return new Promise((resolve, reject)=>{
        try {
            let t=mailer.createTransport({
                service: 'gmail',
                auth:{
                    user: 'nitt.chea@gmail.com',
                    pass: process.env.alchemy_gmail_pass
                }
            })
    
            const opt={
                from: 'Alchemy-20<alchemy20@nitt.edu>',
                to: to_email,
                subject: sub,
                //html: '<h3>Verify your email by clicking the link <a href="localhost:3000/api/confirm/'+verification_token+'">here</a></h3>'
                html: html  //"Verify your email by clicking this link http://localhost:3000/api/confirm/" + verification_token
            }
    
            t.sendMail(opt, (err, info)=>{
                if(err){reject(err)}
                else{resolve(info)}
    
            })
            
        } catch (error) {
            
        }
    })
    
}


exports.validateEmail=(email)=>{
    return validator.validate(email)
}
    //     if(!validator.validate(email)){
    //         //reject({status: 400, message: 'Invalid email'})
    //         return false
    //     }else{
    //         //resolve({status:200, message: 'Valid email'})
    //         return true
    //     }
    // })   


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

exports.gen_alc_id=(curr_cout)=>{       //curr_count is the value 'len' passed from signup route in auth_route. it is the number of users in the current database. so if there are 10 users the the ALC id will be alloted as per the algorightm
    let alc_id="ALC"
    if(curr_cout<10){
        alc_id+="000"+(curr_cout+1).toString()
        console.log('ALC id - ', alc_id)
    }else if(curr_cout>=10 & curr_cout<100){
        alc_id+="00"+(curr_cout+1).toString()

    }else if(curr_cout>=100 & curr_cout<1000){
        alc_id+="0"+(curr_cout+1).toString()
    }else{
        alc_id+=(curr_cout+1).toString()
    }
    return alc_id

}

exports.gen_pass_hash=(password)=>{
    const salt=crypto.randomBytes(64).toString('hex')
    const hashed_pass=crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512')   //returns hashed password
    const hash={
        salt:salt,
        hashed_password:hashed_pass
    }
    return hash
}

exports.compare_pass=(hashed_pass, password, salt)=>{
    return hashed_pass==crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512')

}
