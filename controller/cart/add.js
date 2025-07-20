import { CART } from "../../model/cart.js";

export const addToCart = async (req,res) => {
    try{
        const productId = req.params.id
        const userId = req.user._id
        const existing = await CART.findOne({ userId, productId });
        if (existing) {
            existing.quantity++;
            const updatedProduct  = existing
            const product = await CART.findByIdAndUpdate(existing._id, updatedProduct, { new: true })
            res.status(200).json({ message: "success", product })
        
        }
        else{
            const quantity = 1;
        const added = new CART({
            userId, productId,quantity
        })

        await added.save()
        res.status(201).json({
            message: 'Added to cart',
            add: added 
        })
    }
    } catch(error){
        res.status(500).json({message: "fail", error})
    }
}