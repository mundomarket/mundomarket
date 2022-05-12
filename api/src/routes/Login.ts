
import {Router} from "express";
import User from '../models/User'
import {body, validationResult} from 'express-validator'


const route=Router() 

route.get('/', async (req:any, res:any, next:any) => {
    res.send("login")
});


route.post("/", [
    body("email", "ingrese un email valido").trim().isEmail().normalizeEmail(),
    body("password", "password invalida").trim().isLength({ min:5 }).escape()
],async(req:any, res:any, next:any)=>{

    const errors =  validationResult(req)
        if(!errors.isEmpty()){
            return res.json(errors.array())
        }   
 
       const {email, password} = req.body
       try {
           const user = await User.findOne({email})
           

            if(!user) throw new Error("not found user")
            if(!user.cuentaConfirmada) return res.send("please confirm your account")
            if(!(await user.comparePassword(password))) return res.send("invalid password")
           
          //se crea el usuario por medio de passport
            req.login(user, function(err:any){
                if(err) res.send("no se pudo crear a sesion")
                console.log("esto es sesion de usuario",req.user)
                return res.send("login sussces")
               
            })
       } catch (error) {
        next(error)
       }
});


route.get('/logout', (req:any, res:any, )=>{
    req.logout()
    return res.redirect('/login')
    
})



export default route