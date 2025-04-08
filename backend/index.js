const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config();

const app = express()
const PORT = process.env.PORT || 8000
const MONGODB_URI = process.env.MONGO_URI

// middleware
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('API is running...');
});

// connect to database
const connectDB = async ()=> {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MONGODB');

    app.listen(PORT,()=> {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (err){
    console.error(err);
    // exit the program
    process.exit(1)
  }
}

connectDB();