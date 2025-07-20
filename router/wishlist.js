import express from "express" 
import { addToWL } from "../controller/wishlist/add.js"
import { verifyToken } from "../middleware/auth/auth.js"
import { getWishListByUserID } from "../controller/wishlist/get.js"
import { deleteFromWL } from "../controller/wishlist/remove.js"

const router = express.Router()

router.post("/addtowl/:id",verifyToken, addToWL)
router.get("/getwl",verifyToken, getWishListByUserID)
router.delete("/delete/:id",verifyToken, deleteFromWL)

export default router