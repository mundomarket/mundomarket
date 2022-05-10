
import {Router} from "express";
import passport from "passport" 
import User from '../models/User'


const route=Router() 

route.get('/', async (req:any, res:any, next:any) => {
    res.send("estoy en get login")
});

route.post("/login", async(req:any, res:any, next:any)=>{
 
       const {email, password} = req.body
       try {
           const user = await User.findOne({email: email})
           console.log("esto es login user", user.password)
           if(!user) return res.send("usuario no registrado");
           if(!user.verificado) return res.send("falta confirmar cuenta")
           if(!(await user.validPassword(password))) return res.send("password invalida")
         console.log(user.validPassword(password))
           
           req.login(user, function(err:any){
               if(err) res.send("error el crear la sesion")
               return res.send({msg:'success',user:user})
           })
       } catch (error) {
           next(error)
       }
});

route.get('/logout', async (req:any, res:any, next:any)=>{
    req.logout()
    return res.send("logout sussces")
})



export default route