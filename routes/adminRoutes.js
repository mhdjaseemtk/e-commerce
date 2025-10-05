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
    gettAllUser

 } from '../controllers/adminController.js'

const router = express.Router()


router.post('/login',adminlogin)
router.get('/users',gettAllUser)

 router.get('/products', getAllProducts);      
router.post('/product', createProduct);    
 router.put('/product/:id', updateProduct); 
router.delete('/product/:id', deleteProduct); 

 router.get('/categories', getCategories);      
router.post('/category', createCategory);    
 router.put('/category/:id', updateCategory); 
 router.delete('/category/:id', deleteCategory); 





export default router