import mongoose from "mongoose";

const connectMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connection established!!!")
    }catch (error) {
        console.log("could not establish connection!!!")
    }
};

export default connectMongoDB;