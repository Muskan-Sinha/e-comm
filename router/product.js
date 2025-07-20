import express from "express"
import { getAll, getProductByID, getProductByUserID } from "../controller/product/get.js"
import { update } from "../controller/product/update.js"
import { createProduct } from "../controller/product/create.js"
import { deleteProduct } from "../controller/product/Delete.js"
import { verifyToken } from "../middleware/auth/auth.js"
import upload from "../middleware/multer/upload.js"

const router = express.Router()

router.get("/getall", verifyToken, getAll)
router.get("/getproduct/:id", verifyToken, getProductByID)
router.get("/getproductbyuser/:id", verifyToken, getProductByUserID)
router.post("/create", verifyToken,upload
    .array("images", 5),  createProduct)
router.delete("/delete/:id",verifyToken, deleteProduct)
router.put("/update/:id", verifyToken, update)

export default router