const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require("cors");

const port = 5000;
dotenv.config();

const dbUrl = process.env.DB_URL;
const connectMongo = () => {
    mongoose.connect(dbUrl, () =>{
        console.log("Mongo connected");
    })
}
connectMongo();

const app = express();
app.use(express.json());
app.use(cors());
const authRoutes = require('./routes/auth.js');
const expenseRoutes = require('./routes/expenses.js');

app.use('/api/auth',authRoutes);
app.use('/api/expenses',expenseRoutes);




app.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})