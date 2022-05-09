import passport from 'passport'
import User from '../models/User'
import passportLocal from 'passport-local';
const LocalStrategy = passportLocal.Strategy;

passport.use(new LocalStrategy(
    function(email, password, done){
        User.findOne({email: email}, function(err:any, user:any){
            console.log("estoy en pasport", user)
            if(err) return done(err)
            if(!user) return done(null, false, {message: "el email no existe"})
            if(!user.validPassword(password)) return done(null, false, {message: "password invalido"})
            return done(null, user)
            
        })
        
}));


   
passport.serializeUser((user:any, done)=>{
    done(null, {id: user._id})
})
passport.deserializeUser(async(user:any, done)=>{

    const userDb = await User.findById(user._id)
    return done(null, {id: userDb.id})
   
})
 
export default passport;