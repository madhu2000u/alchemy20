const mailer=require('nodemailer')
const crypto=require('crypto')
const users=require('../models/users')
const tempUser=require('../models/tempActivationUser')
const utils=require('../functions/utils')



exports.resendVerificationMail=(email)=>{
    console.log('Inside resendVerificationEmail()')
    return new Promise((resolve, reject)=>{             //returns a new Promise where if any error we reject it and if sucess we resolve. Then the function that called it will use .then to handle if promise is resolved and .catch, it promise is rejected
        try {
            //const verification_token=crypto.randomBytes(64).toString('hex')
            //let verification_token=""
            users.findOne({email:email}).then((user_result)=>{      //find and get document by given email
                console.log('resend user - ', user_result)  
                tempUser.findOne({user_id:user_result._id}).then((tempUser_result)=>{      //user doc has _id linked to tempUserActivaion's user_id- so get the tempUser doc too which will contain the verification token.
                    console.log('temp user result  ', tempUser_result)
                    console.log("verification token ",tempUser_result.verification_token )
                    //verification_token=tempUser_result.verification_token
                    const subject="Email Verification"
                    const html=`<h4>Welcome for Alchemy'20,<br><br>\
                    Thank you for registering with Alchemy'20 and we are pleased to tell that there are a whole lot of\
                    events and workshops waiting for you. <br>But before we continue please verify your email by clicking this link ${process.env.base_url}/api/confirm/${tempUser_result.verification_token}</h3>` //+ verification_token
            
                    utils.mailer(email, subject, html).then((info)=>{       //mailer function in the utils.js module that sends a promise based on whether the mail sending was successfull or not
                        console.log("mail sent - ", info)
                        resolve({status:200, message:"Verification mail resent"})
        
                    }).catch((err)=>{
                        reject(err)
                    })
                
                }).catch((tempUser_err)=>{console.log("resendVerificationMail() tempUser_error - ", tempUser_err)})                
            }).catch((user_err)=>{console.log("resentVerificationEmail() user.findOne() error - ", user_err)})

        } catch (error) {
            console.log('Inside sendVerificaionEmail() catch block - ', error)
            reject({status:500,message:"Verification mail failed to send"})
            
        }
        
    }) 
        
    
}

exports.sendVerificationMail=(user_id, email)=>{
    console.log('Inside sendVerificaionEmail()')
    return new Promise((resolve, reject)=>{
        try {
            const verification_token=crypto.randomBytes(64).toString('hex')
            const subject="Email Verification"
            const html=`<h4>Welcome for Alchemy'20,<br><br>\
            Thank you for registering with Alchemy'20 and we are pleased to tell that there are a whole lot of\
            events and workshops waiting for you. <br>But before we continue please verify your email by clicking this link ${process.env.base_url}/api/confirm/${tempUser_result.verification_token}</h3>` //+ verification_token
            // let t=mailer.createTransport({
            //     service: 'gmail',
            //     auth:{
            //         user: 'nitt.chea@gmail.com',
            //         pass: process.env.alchemy_gmail_pass
            //     }
            // })
        
            
            const newTempUser=new tempUser({
                user_id:user_id,
                verification_token:verification_token
            })

            utils.mailer(email, subject, html).then((info)=>{
                console.log("mail sent - ", info)
                tempUser.create(newTempUser).then((result)=>{
                    console.log('Acc verificatoin temp user created')
                }).catch((err)=>{console.log('ERROR creating Acc verification temp user'); return err})
                resolve({status:200, message:"Verification mail sent"})

            }).catch((err)=>{
                reject(err)
            })
            
            
            
            // const opt={
            //     from: 'Alchemy-20<alchemy20@nitt.edu>',
            //     to: email,
            //     subject: 'Email verification',
            //     //html: '<h3>Verify your email by clicking the link <a href="localhost:3000/api/confirm/'+verification_token+'">here</a></h3>'
            //     text: "Verify your email by clicking this link http://localhost:3000/api/confirm/" + verification_token
            // }
            
            // t.sendMail(opt, (err, info)=>{
            //     if(err){console.log("error in sending - ", err)}
            //     else{
            //         console.log("mail sent - ", info)
            //         tempUser.create(newTempUser).then((result)=>{
            //             console.log('Acc verificatoin temp user created')
            //         }).catch((err)=>{console.log('ERROR creating Acc verification temp user'); return err})
            //         resolve({status:200, message:"Verification mail sent"})
        
            //     }
            // })
            
        } catch (error) {
            console.log('Inside sendVerificaionEmail() catch block - ', error)
            reject({status:500,message:"Verification mail failed to send"})
            
        }
        
    })
    
    

}

exports.sendConfirmationMail=(email)=>{

    return new Promise((resolve, reject)=>{
        try {
            const subject="Account Verification Confirmation"
            const html="<h3>Welcome from Alchemy'20,<br><br>\
            Your Alchemy account has been verified. Please visit https://alchemy.nitt.edu for more info.<br><br> Thank you<br> Alchemy Team</h3>"
            // let t=mailer.createTransport({
            //     service: 'gmail',
            //     auth:{
            //         user: 'nitt.chea@gmail.com',
            //         pass: process.env.alchemy_gmail_pass
            //     }
            // })
        
            // const opt={
            //     from: 'Alchemy-20<nitt.chea@gmail.com>',
            //     to: email,
            //     subject: 'Email verification confirmation',
            //     html: '<h3>Your alchemy account has been verified. Please visit https://alchemy.nitt.edu for more info.<br><br> Thank you<br> Alchemy Team</h3>'
            // }
            utils.mailer(email, subject, html).then((info)=>{
                console.log("Conf mail sent - ", info)
                resolve({info, status:200, message:"Confirmation mail sent"})

                }).catch((err)=>{
                    console.log("Confirmation mail failed to send - ", err)
                    reject({err, status:400, message:"Confirmaiton mail sending failed"})
                    })
        
            // t.sendMail(opt, (err, info)=>{
            //     if(err){console.log("error in sending confirmation mail - ", err)}
            //     else{
            //         console.log("mail sent - ", info)
            //         resolve({status:200, message: "Confirmation mail sent"})
            //     }
            // })
            
        } catch (error) {
            console.log('Error in sendConfirmationMail()', error)
            reject({status:500, message: "Confirmation mail failed to send"})
            
        }

    })
    
    
    
}