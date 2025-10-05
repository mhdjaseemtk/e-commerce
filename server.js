import express, { urlencoded } from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import userRoutes from './routes/userRoutes.js'
import session from "express-session"
import MongoStore  from 'connect-mongo'
import adminRoutes from './routes/adminRoutes.js'







dotenv.config()
connectDB()
const app = express()
app.use(urlencoded({extended:true}))
app.use(express.json())



app.use(express.json())
app.use(session({
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:false,
    store:MongoStore.create({
        mongoUrl:process.env.MONGO_URL,
        dbName:"eCommerceDB",
        collectionName:"session"
    })

}))

app.use('/',userRoutes)
// app.use('/',publicUsersRoutes)
 app.use('/admin',adminRoutes)




app.listen(process.env.PORT,()=>{
    console.log("server running");
    
})