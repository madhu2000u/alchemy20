const mailer=require('nodemailer')
const crypto=require('crypto')
const tempUser=require('../models/tempActivationUser')


exports.sendVerificationMail=(user_id, email)=>{
    console.log('Inside sendVerificaionEmail()')
    try {
        let t=mailer.createTransport({
            service: 'gmail',
            auth:{
                user: 'nitt.chea@gmail.com',
                pass: process.env.alchemy_gmail_pass
            }
        })
    
        const verification_token=crypto.randomBytes(64).toString('hex')
        const newTempUser=new tempUser({
            user_id:user_id,
            verification_token:verification_token
        })
        
        
        
        const opt={
            from: 'no-reply<alchemy20@nitt.edu>',
            to: email,
            subject: 'Email verification',
            //html: '<h3>Verify your email by clicking the link <a href="localhost:3000/api/confirm/'+verification_token+'">here</a></h3>'
            text: "Verify your email by clicking this link http://localhost:3000/api/confirm/" + verification_token
        }
        
        t.sendMail(opt, (err, info)=>{
            if(err){console.log("error in sending - ", err)}
            else{
                console.log("mail sent - ", info)
                tempUser.create(newTempUser).then((result)=>{
                    console.log('Acc verificatoin temp user created')
                }).catch((err)=>{console.log('ERROR creating Acc verification temp user'); return err})
    
            }
        })
        
    } catch (error) {
        console.log('Inside sendVerificaionEmail() catch block - ', error)
        
    }
    

}

exports.sendConfirmationMail=(email)=>{
    try {
        let t=mailer.createTransport({
            service: 'gmail',
            auth:{
                user: 'nitt.chea@gmail.com',
                pass: process.env.alchemy_gmail_pass
            }
        })
    
        const opt={
            from: 'no-reply<nitt.chea@gmail.com>',
            to: email,
            subject: 'Email verification confirmation',
            html: '<h1>Your alchemy account has been verified. Please visit https://alchemy.nitt.edu for more info./n/n Thank you/n Alchemy Team</h1>'
        }
    
        t.sendMail(opt, (err, info)=>{
            if(err){console.log("error in sending confirmation mail - ", err)}
            else{console.log("mail sent - ", info)}
        })
        
    } catch (error) {
        console.log('Error in sendConfirmationMail()', error)
        
    }
    
    
}