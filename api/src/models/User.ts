import {model,Schema} from "mongoose"
import Token from './Token'
import crypto from "crypto"
import uniqueValidator from "mongoose-unique-validator";
import bcrypt from "bcryptjs"
import mailer from '../nodemailer/nodemailer'


const validateEmail = (email:any)=>{
    const validate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return validate.test(email)
} 

const userSchema= new Schema({
    name:{
        type: String,
        trim: true,
        required: [true, "el nombre es requerido"]
    },
    email:{
        type: String,
        trim: true,
        required: [true, "el email es requerido"],
        lowercase: true,
        unique: true,
        validate: [validateEmail, "email invalido"]
    },
    password:{
        type: String,
        required: [true, "el password es requerido"]
    },
    passwordResetToken: String,
    passwordResetTokenExpire: Date,
    cuentaConfirmada: {
        type: Boolean,
<<<<<<< HEAD
        default: false,
    },
    product:[{
        type: Schema.Types.ObjectId, 
        ref: 'Product' 
    }],
    token:{
        type:String,
        default:""
    }
    // una relacion con mis productos
    // cada producto tiene un user, y un user puede muchos productos..
=======
        default: false
    }
>>>>>>> 95149f54c4854bd13e4b93ca820f2b1478c4452e
    })

userSchema.plugin(uniqueValidator, {message: "El {PATH} ya existe con otro usuario"})



userSchema.pre('save', async function(next:any){
    const user = this
    if(!user.isModified('password')) return next()
    
   try {
       const salt = await bcrypt.genSalt(10)
       const hash = await bcrypt.hash(user.password, salt)

       user.password = hash;
      next()
   } catch (error) {
       //validad si falla la encriptacion de password
       //user = null
       console.log(error) 
       next()
   }
}) 

userSchema.methods.comparePassword = async function (passwordUser:any){
    return await bcrypt.compare(passwordUser, this.password)
}

<<<<<<< HEAD
// userSchema.methods.resetPassword = function(cb:any) {
//     const token = new Token({_userId: this.id, token: crypto.randomBytes(16).toString('hex')});
//     const email_destination = this.email;
//     token.save( (err:any)=>{
//         if(err) { return console.log(err.message)}
    

//         const emailOptions = {
//             from: 'mundomarket@mundomarket.com',
//             to: email_destination,
//             subject: "check e-mail",
//             text: 'Verifique su passsword haciendo click aqui: \n'+ 'http://localhost:3000'+ '\/token/resetPassword\/' + token.token 
//         };
    
// } 
// }    
//         mailer.sendMail(emailOptions, (err:any)=>{
//             if(err){return console.log(err.message)};
//             console.log("A verifiication email has been sent to ", email_destination)
//         })
//     })
// }
=======
/* 
userSchema.methods.resetPassword = function(cb:any) {
    const token = new Token({_userId: this.id, token: crypto.randomBytes(16).toString('hex')});
    const email_destination = this.email;
    token.save( (err:any)=>{
        if(err) { return console.log(err.message)}

        const emailOptions = {
            from: 'mundomarket@mundomarket.com',
            to: email_destination,
            subject: "check e-mail",
            text: 'Verifique su passsword haciendo click aqui: \n'+ 'http://localhost:3000'+ '\/token/resetPassword\/' + token.token 
        };

        
        mailer.sendMail(emailOptions, (err:any)=>{
            if(err){return console.log(err.message)};
            console.log("A verifiication email has been sent to ", email_destination)
        })
    })
}
*/ 
>>>>>>> 95149f54c4854bd13e4b93ca820f2b1478c4452e

userSchema.methods.email_Welcome= function (cb:any){
    const token = new Token({_userId: this.id, token: crypto.randomBytes(16).toString('hex')});
    const email_destination = this.email;
    token.save( (err:any)=>{
        if(err) { return console.log(err.message)}

        const emailOptions = {
            from: 'mundomarket@mundomarket.com',
            to: email_destination,
            subject: "check e-mail",
            html: `<a href= "http://localhost:3000/auth/tokenConfirmed/${token.token}">verifique su cuenta aqui</a>`

            //'Bienvenido a  MUNDOMARKET \n\n' + 'Verifique su cuenta haciendo click aqui: \n'+ 'http://localhost:3000'+ '\/token/confirmation\/' + token.token 
        };
        mailer.sendMail(emailOptions, (err:any)=>{
            if(err){return console.log(err.message)};
            console.log("A verifiication email has been sent to ", email_destination)
        })
    })
 
}

const User= model("User",userSchema)
export default User

