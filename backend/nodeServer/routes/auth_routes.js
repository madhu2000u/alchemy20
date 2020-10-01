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
    res.send("Login route working")
});

//Signup route
router.post('/auth', (req, res)=>{
    const body=req.body
    if(!body.email || !body.password || !body.name || !body.mobile || !body.college || !body.dept || !body.year_of_study || !body.requires_accommodation){res.status(400); res.json({"message":"Bad request. One or more requried fields are missing"})}
    if(body.mobile.length<10){res.status(400); res.json({"message":"Invalid mobile number"})}
    if(!utils.validateEmail(body.email)){res.status(400); res.json({"message":"Invalid email"})}
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
                acc_verify.sendVerificationMail(result._id, result.email)
                

            }).catch((err)=>{
                console.log("Sign up user_token create error")
                //res.status(500).json({message:"Internal Server Error",err})
            })   

            res.status(201)
            res.json({message:"User registered successfully!"})            
            
        }).catch((err)=>{
            if(err.code==11000){
                res.status(409)
                res.json({message:"Email already exists! Login instead"})}
            // }else{
            //     res.status(500); 
            //     res.json({message:"Internal server Error", err})
            // }
        })
    })
    //res.send('Sign up route working')

})


router.get('/confirm/:verification_token', (req, res)=>{
    temp_actvn_user.findOne({vericication_token: req.param.vericication_token}).then((actvn_result)=>{     //finds the _id using the verification token sent to their mail as a parameter
        console.log("actvn_result - ",actvn_result)
        if(actvn_result!=null){            
            user.updateOne({"_id": actvn_result.user_id}, {"acc_active":true}).then((result)=>{                       //then uses the _id to update the account status to active so user can login
                res.status(200)
                console.log(actvn_result)
                user.findOne({"_id":actvn_result.user_id}).then((conf_user_id)=>{   //conf_user_id is the result mongoose gives after findOne using _id which contains a json format of the user collection
                    acc_verify.sendConfirmationMail(conf_user_id.email)             //also in the above line, user_id is the _id in the user collection which is linked to the tempActivation collection
                }).catch((err)=>{console.log('Error in activation route while finding user collection- ', err)})  
                temp_actvn_user.deleteOne({"user_id":actvn_result.user_id}, (err)=>{console.log("Error in verification token when when deleting tempActivaion - ", err)})
                res.send("Account has been activated")
                
            })
        }else{res.status(200); res.json({message:"Verification done or link expired"})}
        

    }).catch((err)=>{console.log("Error in email verificaion temp_actvn_user - ", err)})

})


module.exports=router