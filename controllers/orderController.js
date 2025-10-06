import Cart from "../models/cartModel.js"
import Product from '../models/productModel.js'
import Order from '../models/orderModel.js'

export const userOrder = async (req,res)=>{

    const userId = req.session.userId


    const userCart = await Cart.find({userId})

    






}