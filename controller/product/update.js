import { PRODUCT } from "../../model/product.js"

export const update = async (req, res) => {
    try {

        const updatedProduct = req.body
        const productId = req.params.id
        const uId = req.user._id

        const prod = await PRODUCT.findById(productId)
        if (!prod) {
            return res.status(404).json({ message: "Product not found" })
        }
        
        if (prod.userId == uId) {
            const product = await PRODUCT.findByIdAndUpdate(productId, updatedProduct, { new: true })
            res.status(200).json({ message: "success", product })
        }

        else {
            return res.status(404).json({ message: "Not Authorized" })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "failed" })

    }
}