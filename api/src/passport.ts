const GoogleStrategy = require('passport-google-oauth20').Strategy;
import passport from "passport";

const GOOGLE_CLIENT_ID= "1012946720515-gl7k319pvkodekehls7rdg80tiabf0qp.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET= "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"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/oauth/google/callback"//back   
  },
  function(accessToken:any, refreshToken:any, profile:any, done:any) {
    //console.log("profile",profile)
    done(null,profile)
  }
));
passport.serializeUser((user:any,done:any)=>{
    done(null,user)
})
passport.deserializeUser((user:any,done:any)=>{
    done(null,user)
})