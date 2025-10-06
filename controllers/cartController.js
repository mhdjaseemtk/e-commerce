import Cart from "../models/cartModel.js"
import Product from '../models/productModel.js'


export const addCart = async(req,res)=>{
    try{
 const userId = req.session.userId


    const {productId,quantity} = req.body
    
    const product = await Product.findById(productId)
    if(!product){
        return res.status(500).json({ message: "Product not found" })
    }
    
 let cartItem = await Cart.findOne({ userId, productId });
if (!cartItem) {
  cartItem = new Cart({ userId, productId, quantity });
  await cartItem.save();
        return res.status(200).json({ message: "new cart created" })
}
else{
    cartItem.quantity = cartItem.quantity + quantity
    await cartItem.save()
            return res.status(500).json({ message: "update qunatity" })

}
    }
    catch(error){
        console.log(error.message);
        
       return res.status(400).json({ message: " error" });

    }
  
}

export const getAllCart = async (req,res)=>{
    try{
        const getCart = await Cart.find()
        res.status(200).json(getCart)
    }
    catch(error){
        console.log(error);
        
    }
}


// export const deleteCart = async(req,res) =>{
//     try{
      
//     }
//     catch(error){

//     }
// }