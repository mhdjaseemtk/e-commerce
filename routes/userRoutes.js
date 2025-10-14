import express from 'express'
import { signup,login, userLoginOut } from '../controllers/userController.js'
import { addCart, deleteProductInCart } from '../controllers/cartController.js'
import { userAuth } from '../middlewares/authMiddleware.js'
import { userOrder } from '../controllers/orderController.js'

const router = express.Router()




router.post('/signup',signup)
router.post('/login',login)

// router.get('/categories')

 router.post('/cart',userAuth,addCart)//product id and quantity defult 0ne set
 router.delete('/cart',userAuth,deleteProductInCart)

 router.get('/loginout',userLoginOut)


 router.get('/order',userAuth,userOrder)//ordering time some calculation



export default router