import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    items: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
            name: String,       
            price: Number,     
            quantity: Number,
            image: String       
        }
    ],
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "paid", "shipped", "delivered", "cancelled"],
        default: "pending"
    }
}, { timestamps: true });

const ORDER = mongoose.model("order", orderSchema);

export { ORDER };
