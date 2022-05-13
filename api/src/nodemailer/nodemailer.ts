
import nodemailer from 'nodemailer';


  // const config ={
  //   host: "smtp.mailtrap.io",
  //   port: 2525,
  //   auth: {
  //     user: "fd61c5f9d084e3",
  //     pass: "ab3046da4614aa"
  //   }
   



  const config ={
    //cambiar credenciales de mailtrap
    host: "smtp.mailtrap.io",
    port: 2525,

    auth: {
        user: 'ad88b19df93a4f',
        pass: 'd3f77c0c5c70e1'
    }

  }

  
  const mailer = nodemailer.createTransport(config)
  export default mailer;