import express from "express"
import dotenv from "dotenv"
import { connectToMongoDB } from "./connect.js"
import userRouter from "./router/user.js"
import productRouter from "./router/product.js"
import wishlistRouter from "./router/wishlist.js"
import cartRouter from "./router/cart.js"
import cookieParser from 'cookie-parser'
import cors from "cors";



    dotenv.config({
        path: './.env'
    })

    const app = express()
    app.use(cookieParser())
    connectToMongoDB('mongodb://localhost:27017/ans')
    .then(()=>console.log("connected"))

    app.use(express.json())
    app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true
}));
    app.use("/api/user", userRouter)
    app.use("/api/products", productRouter)
    app.use("/api/wishlist", wishlistRouter)
    app.use("/api/cart", cartRouter)

    app.listen(process.env.PORT||8000, ()=>
    console.log("Server started"))