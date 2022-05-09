import {Router} from "express";
import User from '../models/User'
import Token from '../models/Token'

const route=Router() 


route.get("/forgotPassword", async (req:any, res:any, next:any) => {
    res.send('reset password')
});

route.post("/forgotPassword", function(req:any, res:any, next:any){
   User.findOne({email: req.body.email}, function(err:any,user:any){
      if(!user) return res.send("usuario invalido")
      user.resetPassword(function(err:any){
        if(err) return next(err)
        console.log("session forgotPassword")
      })
      return res.send("reset password")
   })
});

route.get('/resetPassword/:token', function(req, res, next){
    Token.findOne({ token: req.params.token }, function (err:any, token:any){
      if (!token) return res.send({ type: 'not-verified', msg: 'No existe un usuario asociado al token. Verifique que su token no haya expirado.'});
  
      User.findById(token._userId, function(err:any, user:any){
        if (!user) return res.send({ msg: 'No existe un usuario asociado al token.'});
        return res.send('session/resetPassword');
      });
    });
  });



 route.post('/resetPassword', async(req, res, next)=>{
    //const {email, newPassword} = req.body
      
    /*  if(req.body.password !== req.body.confirm_password) {
      res.render('session/resetPassword', {errors: {confirm_password: { message: 'no coincide el password ingresado'}}, usuario: new Usuario({email: req.body.email})});
      return;
    }  */

 /*    const email= {email: req.body.email}
    const password  = {password: req.body.password}

       User.findOneAndUpdate(email, password, function (err:any, user:any) {
            console.log("esto es user", user)
            user.password = req.body.password;
            user.save(function(err:any){
            if (err) {
                console.log(err)
            return res.send("error al actualizar la password");
            }else{
                user.resetPassword()
                res.send("password actualizada")
          //res.redirect('/login');
        }});
    });  */ 
 

    try {
    const email= {email: req.body.email}
    const password  = {password: req.body.password}

    const user =await  User.findOneAndUpdate(email, password)
    if(!user) res.send("usuario no encontrado")
    else {
        await user.resetPassword()
        res.send("password actualizada")
    }
    } catch (error) {
        next(error)
    } 
        
        /* function (err:any, nuevoUsuario:any){
        if(err) return res.send(err)
        else {
            nuevoUsuario.email_Welcome();
            nuevoUsuario.save()
            return res.send("usuario creado con exito")
        }
    })    
    */

   
 
  });
 



export default route