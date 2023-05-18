const passport = require('passport')

const GoogleStrategy = require('passport-google-oauth2').Strategy
passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });
passport.use(new GoogleStrategy({
    clientID:process.env.Google_Client_ID,
    clientSecret: process.env.Google_Client_Secret,
    callbackURL:process.env.Google_Callback_URL,
    passReqToCallback:true
},function(request,accessToken,refreshToken,profile,done){
    console.log(profile)
    return done(null,profile)
}))