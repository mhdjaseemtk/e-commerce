import express from 'express'
import { signup,login } from '../controllers/userController.js'

const router = express.Router()

// router.get('/products')
// router.get('/products/{id}')


router.post('/signup',signup)
router.post('/login',login)

// router.get('/categories')

router.post('/cart')//product id and quantity defult 0ne set
router.get('/cart')
router.put('/cart/:id')
router.delete('/cart/:id')



router.post('/order')//ordering time som calculation
router.get('/order')
router.get('/order/:id')


export default router