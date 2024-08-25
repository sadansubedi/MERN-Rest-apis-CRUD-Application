import express from 'express';
import connectDB from './db/connectdb.js';
import web from './routes/web.js'
const app = express();

const port = process.env.PORT || '3000';
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/schooldb"

//Database connection
connectDB(DATABASE_URL);

//Api Json
app.use(express.json())

//Load Routes
app.use('/student',web)

app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`);

})