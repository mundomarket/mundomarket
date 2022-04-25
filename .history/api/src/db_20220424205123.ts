import mongoose, { ConnectOptions } from "mongoose";

async () => {
  const mongooseOptions;
  await mongoose.connect("mongodb://localhos/mundomarkt");
};
