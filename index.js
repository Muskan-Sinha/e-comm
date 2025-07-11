import express from "express"
import dotenv from "dotenv"
import { connectToMongoDB } from "./connect.js"
import userRouter from "./router/user.js"
import productRouter from "./router/product.js"
import cookieParser from 'cookie-parser'

    dotenv.config({
        path: './.env'
    })

    const app = express()
    app.use(cookieParser())
    connectToMongoDB('mongodb://localhost:27017/ans')
    .then(()=>console.log("connected"))

    app.use(express.json())
    app.use("/api/user", userRouter)
    app.use("/api/products", productRouter)

    app.listen(process.env.PORT||8000, ()=>
    console.log("Server started"))