import { PRODUCT } from "../../Model/product.js"

export const getProductByUserID = async (req,res) => {
    try {
        const uId = req.user._id

        const prods = await PRODUCT.find({userId: uId})

        if(prods.length() === 0) 
            res.status(404).json({message: "Not found any Products"})

        res.status(200).json({message: "success", prods})

    } catch(error) {
        return res.status(500).json({message : "failed", error})
    }
}


export const getAll = async (req,res) => {
    try {
        const prod = await PRODUCT.find({userId: true})

        if(prod.length() === 0) 
            res.status(404).json({message: "Not found any Products"})

        res.status(200).json({message: "success", prod})

    } catch(error) {
        return res.status(500).json({message : "failed", error})
    }
}