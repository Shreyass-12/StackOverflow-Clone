import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoutes from './routes/users.js' 
import dotenv from 'dotenv'
import QuestionsRoutes from './routes/Questions.js'

const app = express();
dotenv.config();
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb", extended:true}))
app.use(cors());

app.get('/',(req,res)=>{
    res.send("this is a stack overflow clone API")
})

app.use('/user', userRoutes)
app.use('/Questions', QuestionsRoutes)

const PORT = process.env.PORT || 5000

const CONNECTION_URL="mongodb+srv://admin:admin@stack-overflow-clone.urac2xc.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> app.listen(PORT,() => {console.log(`server running on port ${PORT}`)}))
.catch((err) => console.log(err.message))