import {Router} from "express";
import User from '../models/User'

const route=Router()


route.get("/:token", async(req:any, res:any, next:any)=>{
   const token = req.params.token
   try {
       const user = await User.findOne({tokenConfirm: token})
       if(!user) throw new Error('not found user')
       user.cuentaConfirmada = true
       user.tokenConfirm = null
       await user.save()
       
       //res.redirect('/login')
       res.json(user)
   } catch (error:any) {
       res.json({error : error.message})
   }

});

export default route