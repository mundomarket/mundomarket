
import {Router} from "express";
import User from '../models/User'
import {body, validationResult} from 'express-validator'


const route=Router() 

route.get('/', async (req:any, res:any, next:any) => {
    res.send("login")
});

//http://localhost:3000/login/login
route.post("/login", [
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
          // if(!user.cuentaConfirmada) throw new Error("please confirm your account")
          // if(!(await user.comparePassword(password))) throw new Error("invalid password")
           
          //creacion del usuario por medio de passport
            req.login(user, function(err:any){
                if(err) throw new Error("no se pudo crear a sesion")
                console.log("esto es sesion de usuario",req.user)
               return res.send("login sussces")
               
            
            })
       } catch (error:any) {
        console.log({ error: error.message})
       }
});


route.get('/logout', (req:any, res:any, )=>{
    req.logout()
    return res.redirect('/login')
    //return res.send("logout sussces")
})



export default route