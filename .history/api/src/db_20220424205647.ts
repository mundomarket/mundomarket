import mongoose, { connectionsOptions } from "mongoose";

async () => {
  const mongooseOptions: connectOptions;
  await mongoose.connect("mongodb://localhos/mundomarkt");
};
