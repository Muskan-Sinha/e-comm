import { PRODUCT } from "../../Model/product.js";

export const createProduct = async (req,res) => {
    try{
        const {name, desc} = req.body;
        const userId = req.user._id

        if(!name){
            return res.status(400).json({message: "Heading is required"})
        }
        const newProduct = new PRODUCT({
            userId, name, desc
        })

        await newProduct.save()
        res.status(201).json({
            message: "Product Created",
            product: newProduct
        })

    } catch(error){
        res.status(500).json({message: "fail", error})
    }
}