import express from 'express'
import { signup } from '../controllers/userController.js'

const router = express.Router()

// router.get('/login')
// router.get('/signup')

// router.post('/login')

router.post('/signup',signup)
// router.get('/login')

export default router