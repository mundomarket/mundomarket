import {Router} from "express";
import User from '../models/User'
<<<<<<< HEAD
=======
import {body, validationResult} from 'express-validator'


>>>>>>> 95149f54c4854bd13e4b93ca820f2b1478c4452e
const route=Router() 


//=====================Login========================


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
<<<<<<< HEAD
           const user = await User.findOne({email: email})
           console.log("esto es login user", user.password)
           if(!user) return res.send("usuario no registrado");
           if(!user.verificado) return res.send("falta confirmar cuenta")
           if(!(await user.password)) return res.status(401).send("password invalida")
         console.log(user.validPassword(password))
=======
           const user = await User.findOne({email})
>>>>>>> 95149f54c4854bd13e4b93ca820f2b1478c4452e
           

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

<<<<<<< HEAD
//=====================Logout========================

route.get('/logout', async (req:any, res:any, next:any)=>{
=======

route.get('/logout', (req:any, res:any, )=>{
>>>>>>> 95149f54c4854bd13e4b93ca820f2b1478c4452e
    req.logout()
    return res.redirect('/login')
    
})



export default route