import express, { urlencoded } from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import userRoutes from './routes/userRoutes.js'



dotenv.config()
connectDB()
const app = express()
app.use(urlencoded({extended:true}))
app.use(express.json())


app.use('/',userRoutes)
// app.use('/',publicUsersRoutes)
// app.use('/admin',admin)




app.listen(process.env.PORT,()=>{
    console.log("server running");
    
})