import mongoose, { mongo } from "mongoose";

const wishlistSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const WISHLIST = mongoose.model("wishlist", wishlistSchema)

export {WISHLIST}