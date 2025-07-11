import { PRODUCT } from "../../Model/product.js"

export const deleteProduct = async (req,res) => {
    try{
        const prodctId = req.params.id
        const userId = req.user._id
        console.log(prodctId);
        
        const prod = await PRODUCT.findOneAndDelete({_id: todoId, userId})
        console.log(prod);
        

        if(!prod) {
            return res.status(404).json({message: "Product not found"})
        }

        res.status(200).json({message: "Product deleted", todo})
    } catch (err) {
        res.status(500).json({message: "Failed", error: err.message})
    }
}