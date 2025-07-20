import { WISHLIST } from "../../model/wishlist.js";

export const addToWL = async (req,res) => {
    try{
        const productId = req.params.id
        const userId = req.user._id
        const existing = await WISHLIST.findOne({ userId, productId });
        if (existing) {
            return res.status(409).json({
            message: 'Product is already in the wishlist'
            });
        }
        const wishlisted = new WISHLIST({
            userId, productId
        })

        await wishlisted.save()
        res.status(201).json({
            message: 'Added to wishlist',
            wish: wishlisted 
        })
    } catch(error){
        res.status(500).json({message: "fail", error})
    }
}