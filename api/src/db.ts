import mongoose from "mongoose";
import config from "./config"



(async () => {
  try{
    // const mongooseOptions:ConnectionOptions ={
    //   userUnifiedTypology:true
    // }
      
    const db= await mongoose.connect(`mongodb+srv://mundomarket:${config.MONGO_PASSWORD}@cluster0.tqn5t.mongodb.net/${config.MONGO_DATABASE}?retryWrites=true&w=majority`,{
      
    });
      console.log("connect to database to:", db.connection.name);
  }catch(error)
   {console.error(error)}
})();
