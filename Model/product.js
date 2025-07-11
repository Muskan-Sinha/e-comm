import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    desc:{
        type: String
    }
})

const PRODUCT = mongoose.model("product", productSchema)

export {PRODUCT}