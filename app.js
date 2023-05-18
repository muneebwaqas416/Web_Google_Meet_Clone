require('dotenv').config()
require('./views/passport_setup')

const express = require(`express`);


// Your routes and other middleware go here


const passport = require('passport')
const app = express();
const session = require('express-session');
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}



app.use(session({
    secret: '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',
    resave: false,
    saveUninitialized: false
  }));
  
app.use(passport.initialize())

app.use(passport.session())
app.use(cors(corsOptions))
app.set("view engine" , "ejs");

app.get('/',(req,res) =>{

    res.render("pages/index")
})

app.get('/success' , (req,res)=>{
    const obj = {name:req.user.displayName,email:req.user.emails[0].value , pic:req.user.photos[0].value};    
    res.redirect(`http://localhost:3000/?name=${obj.name}&&email=${obj.email}&&pic=${obj.pic}`)
    
})
//This will be executed just before the request is made.We are trying to authenticate the user account here in this function below
app.get('/google' , passport.authenticate('google', {scope:['profile','email']}));

app.get('/google/callback',passport.authenticate('google' , {failureRedirect:'/failed'}),function(req,res) {
        res.redirect('/success');
    }
);

app.listen(5000, ()=>{
    console.log("App is running on port 5000")
})