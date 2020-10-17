const express=require('express')
const crypto=require('crypto')
const utils=require('../functions/utils')
const acc_verify=require('../functions/acc_activaion')
const router=express.Router()
const user=require('../models/users')
const user_tokens=require('../models/user_tokens')
const temp_actvn_user=require('../models/tempActivationUser')


//Login route
router.get('/auth', (req, res)=>{
    const body=req.body
    console.log('body - ', body)
    if(Object.keys(body).length===0){res.status(400).json({"message":"Bad request. One or more requried fields are missing"}); return }
    if(!utils.validateEmail(body.email)){res.status(400).json({"message":"Invalid email"}); return}
    user.findOne({"email":body.email}, (err, result)=>{        //here instead of using the promise's .then and .catch, I have used the findOne() function's callback method which returens a respons and the found document and an error if any. I'm just using this just for a change and to see how it is different from the Promise way of handling.
        if(err){res.status(500).json({message:"Internal server error"})}
        else if(!result){res.status(404).json({message:"Email not registered "})}
        else{
             user_tokens.findOne({user_id:result._id}, (err, user_tokens_result)=>{ //to get the salt for comparing the password. Salt is stored in user_tokens collection. callback method type used instead of the promise's .then and .catch type due to same reason as above comment
                 if(err){res.status(500).json({message:"Internal server error"})}
                 else{
                     let password_compare=utils.compare_pass(result.hashed_password, body.password, user_tokens_result.salt)
                     if(!password_compare){   //comparing password
                         res.status(401).json({message:"Invalid password"})
                         return
                     }else if(!result.acc_active){
                        res.status(403).json({message:"Account not activated"})
                        return
                    }else if(result.acc_active & password_compare){
                        res.status(200).json({
                            auth_token:user_tokens_result.auth_token,
                            name:result.name
                        })
                        return

                    }
                 }
             })
            
        }
        return        

    })
    

    console.log('I am here in the login route')
})
    //res.send("Login route working")


//Signup route
router.post('/auth', (req, res)=>{
    const body=req.body
    if(Object.keys(body).length===0/*!body.email || !body.password || !body.name || !body.mobile || !body.college || !body.dept || !body.year_of_study || !body.requires_accommodation*/){res.status(400); res.json({"message":"Bad request. One or more requried fields are missing"})}
    else if(body.mobile.length<10){res.status(400); res.json({"message":"Invalid mobile number"})}
    else if(!utils.validateEmail(body.email)){res.status(400); res.json({"message":"Invalid email"})}
    else{
        user.findOne({email:body.email}).then((result)=>{
            if(result!=null){res.status(409).json({message:"Email already exists! Login instead"})}
            else{
                let alc_id="ALC"
                user.find().then((result)=>{    //these are ES6 functions (aurgument1,aurgument2)=>{<statements>} .then is executed when the db successfuly finds the docs and .catch is used if some error occurs
                const len=result.length
                alc_id=utils.gen_alc_id(len)
                const hashed_password=utils.gen_pass_hash(body.password)
                const newUser=new user({                                    //creates the new userSchema object newUser
                    alc_id:alc_id,
                    email: body.email,
                    hashed_password: hashed_password.hashed_password,
                    name:body.name,
                    mobile:body.mobile,
                    college:body.college,
                    dept:body.department,
                    year_of_study:body.year_of_study,
                    accommodation:body.requires_accommodation,
                    acc_active:false
                })
                user.create(newUser).then((result)=>{           //create a new doc newUser, this create() returns a promise and .then is used to handle when the creation is successfull and the callback function with return parameter returns the created document. And the .cathc is used to handle any error that arises when creating the doc
                    const tokens=new user_tokens({
                        user_id:result._id,            
                        salt:hashed_password.salt,
                        auth_token: crypto.randomBytes(64).toString('hex')

                    })
                    user_tokens.create(tokens).then((token_result)=>{       //so once the newUser is created, we need to store their individual aut_tokens to later authorize the api calls they do in front-end. so a seprate collection for and it and the user_id attribute of thi token collectio is the _id of th user collection (so they are basically linked).
                        console.log("Sign up user_token created")
                        console.log("result values - ", result._id, result.email)
                        acc_verify.sendVerificationMail(result._id, result.email).then((verif_mail)=>{
                            res.status(201).json({message:"User registered successfully"})
                            console.log(verif_mail)
                        }).catch((err)=>{
                            res.json(403).json(err)
                            console.log("sendVerificationMail() error - ", err.message)
                        })
                        

                    }).catch((err)=>{
                        console.log("Sign up user_token create error")
                        //res.status(500).json({message:"Internal Server Error",err})
                    })   

                    // res.status(201)
                    // res.json({message:"User registered successfully!"})            
                    
                }).catch((err)=>{
                    if(err.code==11000){
                        res.status(409)
                        res.json({message:"Email already exists! Login instead"})}
                    // }else{
                    //     res.status(500); 
                    //     res.json({message:"Internal server Error", err})
                    // }
                    })
                }).catch((err)=>{
                console.log("Error in auth finding for user collection with given mail - ", err)
                })
            }
        })
        
    }
    //res.send('Sign up route working')

})


router.get('/confirm/:verification_token', (req, res)=>{
    temp_actvn_user.findOne({verification_token: req.params.verification_token}).then((actvn_result)=>{     //finds the _id using the verification token sent to their mail as a parameter
        console.log("actvn_result - ",actvn_result)
        if(actvn_result!=null){            
            user.updateOne({"_id": actvn_result.user_id}, {"acc_active":true}).then((result)=>{                       //then uses the _id to update the account status to active so user can login
                res.status(200)
                console.log(actvn_result)
                user.findOne({"_id":actvn_result.user_id}).then((conf_user_id)=>{   //conf_user_id is the result mongoose gives after findOne using _id which contains a json format of the user collection
                    acc_verify.sendConfirmationMail(conf_user_id.email).then((info)=>{      //also in the above line, user_id is the _id in the user collection which is linked to the tempActivation collection
                        console.log(info)
                    }).catch((err)=>{console.log(err)})      
                }).catch((err)=>{console.log('Error in activation route while finding user collection- ', err)})  
                temp_actvn_user.deleteOne({"user_id":actvn_result.user_id},(err)=>{console.log("Error in verification token when when deleting tempActivaion - ", err)})
                res.send("Account has been activated")
                
            })
        }else{res.status(200); res.json({message:"Verification done or link expired"})}
        

    }).catch((err)=>{console.log("Error in email verificaion temp_actvn_user - ", err)})

})


router.post('/verify_mail_resend', (req, res)=>{     // email shoud be sent in header (let it be as it is)
    
    if(!utils.validateEmail(req.headers['email'])){res.status(400).json({"message":"Invalid email"})}
    else{
        user.findOne({email:req.headers['email']}).then((user_result)=>{
            if(user_result==null){
                res.status(404).json({message:"Email not registered"})
            }
            else{
                acc_verify.resendVerificationMail(req.headers['email']).then((result)=>{
                    res.status(200).json({message:result.message})
                }).catch((err)=>{
                    console.log("Resend email error - ", err)
                    res.status(500).json({message:"Internal server error"})
                })
            }
        })
        
    }
      

})


module.exports=router