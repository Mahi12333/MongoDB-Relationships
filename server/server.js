// import dotenv from "dotenv";
import dotenv from "dotenv";

dotenv.config({
    path:'./env',
})


import connectDB from "./database/connection.js";
import { app } from "./app.js";


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 5000 , () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO db connected faild!!!",err);
})

