import Cart from "../models/cartModel.js";
import Product from "../models/productModel.js";

export const addCart = async (req, res) => {
  try {
    const userId = req.session.userId;
    const { productId, quantity } = req.body;

    //  product exists
    const product = await Product.findById(productId);
    if (!product) {

      return res.status(404).json({ message: "Product not found" });
    }

    //finding user cart
    let cart = await Cart.findOne({ userId });

    // create new cart
    if (!cart) {
      cart = new Cart({
        userId,
        items: [{ productId, quantity }],
      });
    } else {
      //  product already exists
      const existingItem = cart.items.find(
        (item) => item.productId.toString() === productId
      );

      if (existingItem) {
        //  Update cart quantity
        existingItem.quantity += quantity;
      } else {
        //  new product adding
        cart.items.push({ productId, quantity });
      }
    }

    await cart.save();
    res.status(200).json({ message: "update cart"});
  } catch (error) {
    res.status(500).json({ message: " error" });
        console.log(error.message);

  }
};



export const deleteCart = async(req,res) =>{
    try{
 
    }
    catch(error){

    }
}
