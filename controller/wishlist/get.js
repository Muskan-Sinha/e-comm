import { WISHLIST } from "../../model/wishlist.js"

export const getWishListByUserID = async (req,res) => {
    try {
        const uId = req.user._id

        const prods = await WISHLIST.find({userId: uId})

        if(prods.length === 0) 
            res.status(404).json({message: "Not found any Products"})

        res.status(200).json({message: "success", prods})

    } catch(error) {
        return res.status(500).json({message : "failed", error})
    }
}