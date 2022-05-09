import {Router} from "express";
import  User from "../models/User"
import  Token from "../models/Token"

const route=Router()



route.get("/confirmation/:tokenId", async(req:any, res:any, next:any)=>{
   try {
    const token = await Token.findOne({token: req.params.tokenId})
   
    if(!token) return res.send("no se encontro el token")

    const user = await User.findById(token._userId)
    
    if(!user) return res.send("no se encontro el user")
    if(user.verificado) return res.send('usuario verificado')  // res.redirect(/user)

    const verificarUser = await User.findByIdAndUpdate(user.id, {verificado: true})
    
    return res.send("token verificado")
  //  res.redirect(/home)
   } catch (error) {
       next(error)
   }



});

export default route