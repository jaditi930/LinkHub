const express=require("express")
const dotenv=require("dotenv").config()
const app=express()
const cors=require("cors")
const connectDb=require("./connectDb")
const fileUpload=require("express-fileupload")

app.use(express.static('static'))               // static dir path

app.use(
    fileUpload({
        limits: {
            fileSize: 10000000,
        },
        abortOnLimit: true,
    })
);

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