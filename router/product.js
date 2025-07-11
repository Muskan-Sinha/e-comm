import express from "express"
import { getAll } from "../controller/product/get.js"
// import { getProductByUserID } from "../controller/product/get.js"
import { update } from "../controller/product/update.js"
import { createProduct } from "../controller/product/create.js"
import { deleteProduct } from "../controller/product/Delete.js"
import { verifyToken } from "../middleware/auth/auth.js"

const router = express.Router()

router.get("/getall", verifyToken, getAll)
router.post("/create", verifyToken, createProduct)
router.delete("/delete/:id",verifyToken, deleteProduct)
router.put("/update/:id", verifyToken, update)

export default router