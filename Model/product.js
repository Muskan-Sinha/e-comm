import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String
    },
    category: {
        type: String,
        required: true
    },
    images: [{
        type: String,
    }],

    marketPrice: {
        type: Number,
        required: true,
        min: 0
    },
    discount: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
    },
    sellPrice: {
        type: Number,
        min: 0
    },
    stock: {
        type: Number,
        default: 0,
        min: 0
    },

})

productSchema.virtual("inStock").get(function () {
    return this.stock > 0;
});

productSchema.virtual("calcSellPrice").get(function () {
    const discountAmount = (this.marketPrice * this.discount) / 100;
    return Math.round(this.mPrice - discountAmount);
});

productSchema.pre("save", function (next) {
    if (this.sellPrice && this.marketPrice) {
        const rawDiscount = ((this.marketPrice - this.sellPrice) / this.marketPrice) * 100;
        this.discount = Math.round(rawDiscount);
    }
    next();
});

productSchema.set("toJSON", { virtuals: true });
productSchema.set("toObject", { virtuals: true });

const PRODUCT = mongoose.model("product", productSchema)

export { PRODUCT }