import {Router} from "express";
import User from '../models/User'
import {body, validationResult} from 'express-validator'

const route=Router()

route.get('/', (req:any,res:any)=>{
    res.send("register")
})


 /* .custon((value:any,(req:any))=>{
        if(value !== req.body.repeatPassword) 2:10hs
    })*/


//http://localhost:3000/register/register
route.post("/register", [
    body("name", "ingrese un nombre valido").trim().notEmpty().escape(),
    body("email", "ingrese un email valido").trim().isEmail().normalizeEmail(),
    body("password", "ingrese una password valida").trim().isLength({ min:5 }).escape()
   
    ],async(req:any, res:any, next:any)=>{
    
    const errors =  validationResult(req)
        if(!errors.isEmpty()){
            return res.json(errors.array())
        }

    const {name, email, password} = req.body
    try {
       let user =  await User.findOne({email: email})
       if(user) throw new Error("ya existe el usuario")
        user  = new User ({name, email, password})
        await user.save()

        //enviar correo electronico para la confirmacion de la cuenta
       
        return res.send("login succes")
        //return res.send("login success")
       // return res.send("usuario registrado con exito")

    } catch (error:any) {
        console.log({ error: error.message})
        //res.json
    }
})

export default route