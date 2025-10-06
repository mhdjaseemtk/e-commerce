
import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
     userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
 items: [
    {
      productId: mongoose.Schema.Types.ObjectId,
      quantity: Number,
    }
  ]
}
)

export default mongoose.model('Cart',cartSchema,'carts')