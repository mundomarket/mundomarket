import {Router} from "express";
import User from '../models/User'
import Token from '../models/Token'
import nodemailer from "nodemailer"
import randomstring from "randomstring"
import config from "../config/sendEmail"
import bcryptjs from "bcryptjs"
const route=Router() 


//======================Envio de email=================

const sendResetPasswordMail=async(email:any,name:any,token:any) => {
    try{
       const transporter=nodemailer.createTransport({
        host:"smtp.mailtrap.io",
        port: 2525, 
      
        auth: {
            user: 'ad88b19df93a4f',
            pass: 'd3f77c0c5c70e1'
        }
      
        
      
       })
   
 const mailOptions={
  from:'mundomarket@mundomarket.com',
  to:config.emailUser,
  subject:"For reset Password",
  html:`<p> Hello, ` + name +  `. Please  copy the link and <a href="http://localhost:3000/password/reset?token=`+token+`">reset your password</a>`
}
transporter.sendMail(mailOptions,function(error,info){
  if(error){
    console.log(error)
  }else{
    console.log("Mail has been sent:-", info.response)
  }
});

    }catch(e){
      console.log(e)
    }
}

//==============Segurizar password======================
const securePassword=async(password:any)=>{
  try{
      const passwordHash=await bcryptjs.hash(password,10);
      return passwordHash;
  }catch(e){
    console.log(e)
  }
}

//===============FORGOT PASSWORD========================
route.post("/forgot",async(req:any,res:any)=>{
 
 try{
  const {email}=req.body

     const userData=await User.findOne({email:email})
     if(userData){
        const randomString=randomstring.generate();
        console.log(randomString)
       const data=  await User.updateOne({email:email},{$set:{token:randomString}})
       sendResetPasswordMail(userData.name,userData.email,randomString); 
       
       res.status(200).send({success:true,msg:"Please chek yout inbox of mail and reset your password"})

     } else{
       res.status(400).send({success:false,msg:"This email does not exists"})
     }  

 }catch(e){
   console.log(e)
 }

})
//================RESET PASSWORD==================================
route.get("/reset",async(req:any,res:any)=>{

  try{
      const token=req.query.token;
      const tokenData=await User.findOne({token:token})
      if(tokenData){
          const password=req.body.password
          const newPassword=await securePassword(password)
         const userData=await User.findByIdAndUpdate({_id:tokenData._id},{$set:{password:newPassword, token:""}},{new:true})
          res.status(200).send({success:true,msg:"User Password has been reset",data:userData})
        }else{
        res.status(400).send({success:false, msg:"This link has been expired"})
      }
  }catch(e){
    console.log(e)
  }
})

export default route