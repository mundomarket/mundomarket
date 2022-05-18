const passport = require("passport");
const router= require("express").Router();
import Token from '../models/Token'
import User from "../models/User"
import jwt from "jsonwebtoken";
const CLIENT_URL = "http://localhost:3001"//front

router.get("/login/failed", (req:any,res:any)=>{
res.status(401).json({
    success: false,
    message: "failure",
});
});
router.get("/login/success", (req:any, res:any) => {
    console.log("req.user login success:",req.user)
    if (req.user) {
      res.status(200).json({
        success: true,
        message: "successfull",
        user: req.user,
        // cookies: req.cookies
      });
    }
  });
router.get("/logout", (req:any, res:any)=>{
    req.logout();
    console.log("entre al logout")
    res.redirect(CLIENT_URL);
});
router.get("/google",passport.authenticate("google",{ scope: ["profile", "email"]}))

router.get("/google/callback", passport.authenticate("google", {
  scope: ['https://www.googleapis.com/auth/plus.login']
      //  ,successRedirect: CLIENT_URL,
      //  failuredRedirect: "/login/failed"
      }),
  async function (req:any, res:any) {
  console.log("req.user para token:",req.user)//console.log para ver usuario
  if (req.user) {
    //creando token en bd
    const tokenBus= await Token.findOne({ _userId: req.user._id})
    console.log("token buscado",tokenBus)
    if (!tokenBus) {
      const token = jwt.sign({id: req.user._id}, 'top_secret', {
        expiresIn: 60 * 60 * 24 // equivalente a 24 horas
      })
      const ObjToken = new Token();
      ObjToken._userId= [req.user._id];
      ObjToken.token = token;
      await ObjToken.save();
      res.cookie('token',token)
    //-------------------------------
    }else{
      res.cookie('token',tokenBus.token)
    }
    res.redirect(CLIENT_URL+"/home")
  } else {
    res.redirect(CLIENT_URL)
  }
}
);
// router.get("/google/callback", passport.authenticate("google", {
//     successRedirect: CLIENT_URL,
//     failuredRedirect: "/login/failed"
// }))

module.exports = router