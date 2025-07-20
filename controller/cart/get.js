import mongoose from "mongoose"
import { CART } from "../../model/cart.js"

export const getCartByUserID = async (req, res) => {
    try {
        const uId = req.user._id

        const cartItems = await CART.aggregate([
            {
                $match: {
                    userId: new mongoose.Types.ObjectId(uId)
                }
            },
             {
                $lookup: {
                    from: "products7",
                    localField: "productId",
                    foreignField: "_id",
                    as: "prod"
                }
            }
        ])

        if (cartItems.length === 0)
            res.status(404).json({ message: "Not found any Products" })

        res.status(200).json({ message: "success", cartItems })

    } catch (error) {
        return res.status(500).json({ message: "failed", error: error.message || error })
    }
}