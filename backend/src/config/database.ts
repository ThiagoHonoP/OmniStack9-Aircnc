import mongoose from "mongoose";
import "dotenv/config";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.DATABASE_URI as string);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
}
