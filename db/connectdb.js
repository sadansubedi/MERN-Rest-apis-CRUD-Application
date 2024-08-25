import mongoose from 'mongoose';

const DB_OPTIONS={
    dbName:'schooldb'
}
const connectDB =async (DATABASE_URL)=>{
    try {
     await mongoose.connect(DATABASE_URL,DB_OPTIONS);
     console.log('Connected to MongoDB successfully!');
 } catch (err) {
     console.error('Error connecting to MongoDB:', err);
 }
 }
export default connectDB

