import { PRODUCT } from "../../model/product.js";

export const createProduct = async (req, res) => {
    try {
        const { name, desc, marketPrice, sellPrice, discount, stock, category } = req.body;
        const userId = req.user._id
        const images = req.files.map((file) => file.path);

        if (!name) {
            return res.status(400).json({ message: "Heading is required" })
        }
        const newProduct = new PRODUCT({
            userId, name, desc, marketPrice, sellPrice, discount, stock, category, images
        })

        await newProduct.save()
        res.status(201).json({
            message: "Product Created",
            product: newProduct
        })

    } catch (error) {
        res.status(500).json({ message: "fail", error })
    }
}