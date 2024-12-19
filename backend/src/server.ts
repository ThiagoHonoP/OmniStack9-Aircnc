import express from "express";
import mongoose from "mongoose";
import { connectDB } from "./config/database";
import SessionRouter from "./routes";

const app = express();
connectDB();
app.use(express.json());

app.use(SessionRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
