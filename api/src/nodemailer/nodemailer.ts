
import nodemailer from 'nodemailer';



  const config ={
    //cambiar credenciales de mailtrap
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "fd61c5f9d084e3",
      pass: "ab3046da4614aa"
    }
  };
  
  const mailer = nodemailer.createTransport(config)
  export default mailer;