import mongoose from "mongoose";
import config from "./config"



(async () => {
  try{
    // const mongooseOptions:ConnectionOptions ={
    //   userUnifiedTypology:true
    // }
      
    const db= await mongoose.connect(`mongodb+srv://leonel:${config.MONGO_PASSWORD}@clusterdemo.j4c5uyo.mongodb.net/${config.MONGO_DATABASE}?retryWrites=true&w=majority`,{
      //mongodb+srv://leonel:<password>@clusterdemo.j4c5uyo.mongodb.net/test
    });
      console.log("connected to database :", db.connection.name);
  }catch(error)
   {console.error(error)}
})();
