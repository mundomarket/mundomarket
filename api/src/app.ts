import express from "express";
import morgan from "morgan";
import cors from "cors";

import session from 'express-session'
import passport from "passport";
import User from './models/User'



// import csurf from "csurf";
import router from "./routes/index"
import {createRoles} from './controllers/initialSetUp';

const app = express();
createRoles();
// const csurfProtection = csurf();


app.use(session({
  cookie:{maxAge: 240 * 60 * 60 *1000},
  saveUninitialized : false,  //true
  resave : false,  // true
  secret : 'keyboard__cat/..5/' ,  
  name: "session_cokie__name"
}))


// EJEMPLO DE SESSION
/* app.get('/protegido', (req:any,res:any)=>{
  res.json(req.session.user || "sin sesion de usuario")
})
app.get('/crear-session', (req:any, res:any)=>{
  req.session.user = "emma"
  res.redirect('/protegido')
})

app.get('/chau', (req:any,res)=>{
  req.session.destroy()
  res.redirect('protegido')
})
 */

app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser((user:any, done)=>{
  done(null, {id: user._id, name: user.name, email: user.email});
})

passport.deserializeUser(async(user:any, done)=>{
  const userDb = await User.findById(user.id)
  return done(null, {id: userDb._id, name: userDb.name, email:userDb.email})
})



app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);
app.use((req:any, res:any, next:any) => {
    const error: any = new Error("Not found");
    error.status = 404;
    next(error);
  }
  );
  
  app.use((error: any, req: any, res: any, next: any) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message,
      },
    });
  })
export default app;
