import mongoose, { connectionOptions } from "mongoose";

async () => {
  await mongoose.connect("mongodb://localhos/mundomarkt");
};
