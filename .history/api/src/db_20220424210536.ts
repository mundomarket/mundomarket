import mongoose from "mongoose";

(async () => {
  await mongoose.connect("mongodb://localhos/mundomarkt");
  console.log("conet base de dato");
  
};
)