import {Router} from "express";
import User from '../models/User'
import {body, validationResult} from 'express-validator'

const route=Router()

route.get('/', (req:any,res:any)=>{
    res.send("register")
})


route.post("/", [
    body("name", "ingrese un nombre valido").trim().notEmpty().escape(),
    body("email", "ingrese un email valido").trim().isEmail().normalizeEmail(),
    body("password", "ingrese una password valida").trim().escape()
   
    ],async(req:any, res:any, next:any)=>{
    
    const errors =  validationResult(req)
        if(!errors.isEmpty()){
            return res.json(errors.array())
        }

    const {name, email, password} = req.body
    try {
       let user =  await User.findOne({email: email})
       if(user) return res.send("ya existe el usuario")
        user  = new User ({name, email, password})
        user.email_Welcome()
        await user.save()
        return res.send("register successfull")
      

    } catch (error:any) {
        console.log({ error: error.message})
        
    }
})

export default route