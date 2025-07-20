// import { PRODUCT } from "../../model/product.js"
import { WISHLIST } from "../../model/wishlist.js";

export const deleteFromWL = async (req,res) => {
    try{
        const productId = req.params.id
        const userId = req.user._id
        console.log(productId);
        
        const prod = await WISHLIST.findOneAndDelete({productId: productId, userId})
        console.log(prod);
        

        if(!prod) {
            return res.status(404).json({message: "Product not found"})
        }

        res.status(200).json({message: "Product deleted", prod})
    } catch (err) {
        res.status(500).json({message: "Failed", error: err.message})
    }
}