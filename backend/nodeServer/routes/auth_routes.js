const express=require('express')
const router=express.Router()
const user=require('../models/users')



router.get('/auth', (req, res)=>{
    res.send("Login route working")
});

router.post('/auth', (req, res)=>{
    res.send('Sign up route working')

})


module.exports=router