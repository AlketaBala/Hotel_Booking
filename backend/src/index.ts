import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from "mongoose";
mongoose.set('strictQuery', true); // Add this line
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";
import cookiesParser from "cookie-parser";
import myHotelRoutes from "./routes/my-hotels";
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)


const app = express();
app.use(cookieParser());
app.use (express.json());
app.use (express.urlencoded({extended:true}));
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/my-hotels", myHotelRoutes)

app.listen (7000,()=>{
    console.log("Server running on localhost:7000")
})