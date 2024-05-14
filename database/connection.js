import mongoose from "mongoose";
import { DB_NAME } from "../db_tbl.js";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Aggregation', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
return mongoose.connection; 
    } catch (error) {
        console.log("MONGODB connection error", error);
        //
        process.exit(1);
    }
};


export default connectDB;







// const connectionInstance = await mongoose.connect('mongodb://localhost:27017/Aggregation',{
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
//         // console.log(connectionInstance);
