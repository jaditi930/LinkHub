const express=require("express")
const dotenv=require("dotenv").config()
const app=express()
const cors=require("cors")
const connectDb=require("./connectDb")


const port=process.env.PORT

// connect to database
connectDb()

const corsOptions ={
    origin:'*', 
    credentials:true,            

}
// for getting user data from request object before the call of the router
app.use(express.json())

app.use(cors(corsOptions));

// for routes
app.use("/",require("./routes/linkhub"))


app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})