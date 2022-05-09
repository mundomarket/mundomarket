import {model,Schema} from "mongoose"
import Token from './Token'
import crypto from "crypto"
import uniqueValidator from "mongoose-unique-validator";
import  bcrypt from "bcrypt"
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
    passwordResetTokenExpires : Date,
    verificado: {
        type: Boolean,
        default: false,
    },
    product:[{
        type: Schema.Types.ObjectId, 
        ref: 'Product' 
    }]
    // una relacion con mis productos
    // cada producto tiene un user, y un user puede muchos productos..
    })

userSchema.plugin(uniqueValidator, {message: "El {PATH} ya existe con otro usuario"})

userSchema.pre('save',function(next:any){
    if(this.isModified('password')){
        this.password = bcrypt.hashSync(this.password, 10)
    }
    next()
}) 
userSchema.methods.validPassword = function(password:any){
    return bcrypt.compareSync(password, this.password);
}

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


 userSchema.methods.email_Welcome= function (cb:any){
    const token = new Token({_userId: this.id, token: crypto.randomBytes(16).toString('hex')});
    const email_destination = this.email;
    token.save( (err:any)=>{
        if(err) { return console.log(err.message)}

        const emailOptions = {
            from: 'mundomarket@mundomarket.com',
            to: email_destination,
            subject: "check e-mail",
            text: 'Bienvenido a  MUNDOMARKET \n\n' + 'Verifique su cuenta haciendo click aqui: \n'+ 'http://localhost:3000'+ '\/token/confirmation\/' + token.token 
        };
        mailer.sendMail(emailOptions, (err:any)=>{
            if(err){return console.log(err.message)};
            console.log("A verifiication email has been sent to ", email_destination)
        })
    })

}
  
const User= model("User",userSchema)
export default User

