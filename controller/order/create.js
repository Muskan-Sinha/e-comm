import { CART } from "../../model/cart.js"
import { ORDER } from "../../model/order.js"
import { PRODUCT } from "../../model/product.js"

const createOrder = async (req, res) => {
    try{
        const userId = req.user.id;

        const cartItems = await CART.find({ userId }).populate("productId");

        if (cartItems.length === 0) {
            return res.status(400).json({ message: "Cart is empty" });
        }

        const orderItems = cartItems.map(item => ({
            productId: item.productId._id,
            name: item.productId.name,
            price: item.productId.sellPrice || item.productId.marketPrice,
            quantity: item.quantity,
            image: item.productId.images[0] || ""
        }));

        const totalPrice = orderItems.reduce((sum, it) => sum + (it.price * it.quantity), 0);

        const order = await ORDER.create({
            userId,
            items: orderItems,
            totalPrice
        });

        await CART.deleteMany({ userId });

        res.status(201).json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export { createOrder };
