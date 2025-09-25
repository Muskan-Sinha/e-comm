import express from "express"; 
import { createOrder } from "../controller/order/create.js";
import { verifyToken } from "../middleware/auth/auth.js";
const router = express.Router();


router.post("/", verifyToken, createOrder);
// router.get("/my", authMiddleware, getMyOrders);
// router.get("/:id", authMiddleware, getOrderById);

export default router;
