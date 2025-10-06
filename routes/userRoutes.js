import express from 'express'
import { signup,login } from '../controllers/userController.js'
import { addCart } from '../controllers/cartController.js'
import { userAuth } from '../middlewares/authMiddleware.js'

const router = express.Router()




router.post('/signup',signup)
router.post('/login',login)

// router.get('/categories')

 router.post('/cart',userAuth,addCart)//product id and quantity defult 0ne set
// router.delete('/cart/:id')



// router.post('/order')//ordering time some calculation



export default router