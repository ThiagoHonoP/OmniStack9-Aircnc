import express from "express";
import mongoose from "mongoose";
import { connectDB } from "./config/database";
import SessionRouter from "./routes";
import cors from "cors";

const app = express();
app.use(cors());
app.use();
connectDB();
app.use(express.json());

app.use(SessionRouter);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
