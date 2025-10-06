import express from 'express'
import { signup,login } from '../controllers/userController.js'
import { addCart, getAllCart } from '../controllers/cartController.js'
import { userAuth } from '../middlewares/authMiddleware.js'

const router = express.Router()

// router.get('/products')
// router.get('/products/{id}')


router.post('/signup',signup)
router.post('/login',login)

// router.get('/categories')

 router.post('/cart',userAuth,addCart)//product id and quantity defult 0ne set
//  router.get('/cart',getAllCart)
// router.put('/cart/:id')
// router.delete('/cart/:id')



// router.post('/order')//ordering time some calculation
// router.get('/order')
// router.get('/order/:id')


export default router