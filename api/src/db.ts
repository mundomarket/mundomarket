import mongoose from "mongoose";
import config from "./config"



(async () => {
  try{
    // const mongooseOptions:ConnectionOptions ={
    //   userUnifiedTypology:true
    // }
      
    const db= await mongoose.connect("mongodb+srv://mundomarket:mundomarket@cluster0.tqn5t.mongodb.net/mundomarket?retryWrites=true&w=majority");
      console.log("Connected to database :", db.connection.name);
  }catch(error)
   {console.error(error)}
})();
