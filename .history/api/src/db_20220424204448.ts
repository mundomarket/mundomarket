import mongoose from "mongoose";

async () => {
  await mongoose.connect("mongodb://localhos/mundomarkt");
};
