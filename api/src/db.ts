import mongoose from "mongoose";

(async () => {
  await mongoose.connect("mongodb://localhost/mundomarkt");
  console.log("conet base de dato");
})();
