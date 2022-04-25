import mongoose, { conectionOptions } from "mongoose";

async () => {
  const mongooseOptions: conectionOptions;
  await mongoose.connect("mongodb://localhos/mundomarkt");
};
