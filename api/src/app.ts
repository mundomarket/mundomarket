import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./routes/index"
import session from 'express-session'
import passport from "passport";
import User from '../src/models/User'

const store = new session.MemoryStore;

const app = express();

app.use(express.static(__dirname + 'client/src/components'))
app.use(session({
  cookie:{maxAge: 240 * 60 * 60 *1000},
  store: store,
  saveUninitialized : true ,
  resave : true, 
  secret : 'keyboard__cat/..5/' ,  
  name: "session_cokie__name"
}))

app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser((user:any, done)=>{
  done(null, {id: user._id})
})
passport.deserializeUser(async(user:any, done)=>{

  const userDb = await User.findById(user.id)
  console.log(userDb)
  return done(null, {id: userDb._id})
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
