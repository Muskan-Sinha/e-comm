import express from "express" 
import { addToCart } from "../controller/cart/add.js"
import { verifyToken } from "../middleware/auth/auth.js"
import { getCartByUserID } from "../controller/cart/get.js"
import { removeFromCart } from "../controller/cart/remove.js"

const router = express.Router()

router.post("/addToCart/:id",verifyToken, addToCart)
router.get("/getcart",verifyToken, getCartByUserID)
router.delete("/delete/:id",verifyToken, removeFromCart)

export default router