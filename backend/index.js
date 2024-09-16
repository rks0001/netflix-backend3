//step-1
// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";
import movieRoute from "./routes/movieRoutes.js";

databaseConnection();

dotenv.config({
    path:".env"
})

const app = express();
//middlewares 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin:'https://netflix-2-0-rhqe.onrender.com',
    credentials:true,
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    withCredentials: true,
    optionsSuccessStatus: 200,
}
app.use(cors(corsOptions));
 
// api
app.use("/api/v1/user", userRoute);
app.use("/api/movies",movieRoute);

app.listen(process.env.PORT || 8080,() => {
    console.log(`Server running at port 3001`);
});
