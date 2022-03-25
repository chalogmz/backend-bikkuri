const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        products: [
            {
                productId: { type: String }
            },
            {
                quantity: { type: Number, default: 1 }
            }
        ],
        amount: { type: Number, required: true },
        addresses: { type: Object, required: true },
        status: { type: String, default: "pending" },
    },
    { timestamp: true } 
);


module.exports = mongoose.model("Cart", CartSchema);