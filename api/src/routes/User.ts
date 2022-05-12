import {Router} from "express";
import User from '../models/User'

const route=Router()
route.get('/list',async(req, res, next) =>{
    try {
        const users = await User.find({})
        return res.json(users)
    } catch (error) {
        next(error)
    }
})

route.get('/register',async(req, res, next) =>{
    // va en el front res.render('/user/creare')
}) 

route.post('/register',function(req, res, next){
    /*  if(req.body.password !== req.body.confirm_password){
        return res.send("no coinciden las password")
    }  */

    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }, function (err:any, nuevoUsuario:any){
        if(err) return res.send(err)
        else {
            nuevoUsuario.email_Welcome();
            nuevoUsuario.save()
            return res.send("usuario registrado con exito")
           
        }
    })   
   
})

route.get('/:id/update',async(req, res, next) =>{
  try {
     const user = await User.findById(req.params.id); 
     if(!user){ return res.send("el usuario no existe")}
     //res.redirect(/user)  <- lo que va en el front
     return res.json(user)
  } catch (error) {
      next(error)
  }
 
})

route.post('/:id/update',async(req, res, next) =>{
    const id = req.params.id
    const name = req.body.name
    try {
        const userUpdate = await User.findByIdAndUpdate(id , {name: name})
        if(!userUpdate){return res.send("usuario no encontrado")}
        return res.json(userUpdate)
    } catch (error) {
        next(error)
    }
})

route.post('/:id/delete',async(req, res, next) =>{
try {
    const userDelete = await User.findByIdAndDelete(req.body.id)
    return res.send("se elimino el user")
} catch (error) {
    next(error)
}
})

export default route;