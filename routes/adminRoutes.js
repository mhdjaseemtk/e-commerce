import express from 'express'
import { 
    adminlogin,
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory,
    gettAllUser,
    getAllOrders,
    adminLoginOut

 } from '../controllers/adminController.js'
import { adminAuth } from '../middlewares/authMiddleware.js'

const router = express.Router()


router.post('/login',adminlogin)
router.get('/logout',adminAuth,adminLoginOut)
router.get('/users',adminAuth,gettAllUser)

 router.get('/products', getAllProducts);      
router.post('/product', adminAuth,createProduct);    
 router.put('/product/:id', updateProduct); 
router.delete('/product/:id', deleteProduct); 

 router.get('/categories', getCategories);      
router.post('/category',adminAuth, createCategory);    
 router.put('/category/:id', updateCategory); 
 router.delete('/category/:id', deleteCategory); 

router.get('/orders',getAllOrders)



export default router