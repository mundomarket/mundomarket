import mongoose from "mongoose";
import config from "./config"



(async () => {
  try{
    // const mongooseOptions:ConnectionOptions ={
    //   userUnifiedTypology:true
    // }
      
    const db= await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`,{
            
    });
      console.log("connected to database :", db.connection.name);
  }catch(error)
   {  console.error(error)}
})();
