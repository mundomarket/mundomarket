import mongoose, { connectionOptions } from "mongoose";

async () => {
  const mongooseOptions: connectionOptions;
  await mongoose.connect("mongodb://localhos/mundomarkt");
};
