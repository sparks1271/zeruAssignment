import mongoose from "mongoose";
import 'dotenv/config';


const connectDb = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_DB_URL}/zeruAssignment`);
        
        console.log("MongoDB connection successful");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};





export default connectDb;