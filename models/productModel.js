import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, },
    description: { type: String, required: true,  },
    price: { type: Number, required: true, min: 0 },
    category: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Category",
      required: true,
    }
   
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
