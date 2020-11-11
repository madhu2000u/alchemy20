const oauth_router=require("express").Router();
const passport=require('passport')


oauth_router.get("/google", passport.authenticate("google", {scope:["profile", "email"]}))

// oauth_router.get("/login", (req, res) => {       we are not rendering any login screen

// }) 

oauth_router.get("/logout", (req, res) => {

})

//callback to handle google redirect
oauth_router.get("oauth/google/redirect", passport.authenticate("google"), (req, res) => {
    //res.send("Redirect")

})
module.exports=oauth_router