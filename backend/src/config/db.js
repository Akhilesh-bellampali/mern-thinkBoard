import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongoose connecte");
  } catch (error) {
    console.error("errro connecting to MONGODB", error);
  }
};
