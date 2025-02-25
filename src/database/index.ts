import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const connectDB = async () => {
    try {
        const mongo =  await mongoose.connect(process.env.MONGO_URI as string);
        console.log('MongoDB Connected');
        return mongo;
    } catch (error) {
        console.error('MongoDB Connection Error:', error);
        process.exit(1);
    }
};

export default connectDB;