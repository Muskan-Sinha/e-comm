import { CART } from "../../model/cart.js";

export const removeFromCart = async (req,res) => {
    try{
        const productId = req.params.id
        const userId = req.user._id
        const existing = await CART.findOne({ userId, productId });
        
        if (existing) {        
            if(existing.quantity>1){
                existing.quantity--;
                const updatedProduct = await existing.save();
                res.status(200).json({ message: "success", updatedProduct})
            } 
            else {
                const product = await CART.findOneAndDelete({_id:existing._id, userId})
                res.status(200).json({ message: "success", product })
            }       
        }
        else if(!existing) {
            return res.status(404).json({message: "Product not found"})
        }
    
    } catch(error){
        res.status(500).json({message: "fail", error})
    }
}