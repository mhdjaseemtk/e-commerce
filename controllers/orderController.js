import Cart from "../models/cartModel.js"
import Product from '../models/productModel.js'
import Order from '../models/orderModel.js'

export const userOrder = async (req,res)=>{

    const userId = req.session.userId


    const userCart = await Cart.findOne({userId})

    if(!userCart || userCart.items.length == 0){
        console.log(userCart);
        
      return   res.status(400).json({message:"cart is empty"})
    }

    const userOrder = new Order({
        userId,
        items:userCart.items.map((ele)=>
            ({
            productId:ele.productId,
           
            quantity:ele.quantity})
        ),
        
        

           totalAmount: userCart.items.reduce(
        (acc, item) => acc+item.quantity*  item.price,
        
        
        0
      )
    })
    await userOrder.save()
     userCart.items = []
     await userCart.save()

    res.status(200).json({message:"ordered!!!"})





    






}