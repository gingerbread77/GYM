const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/User')

require('dotenv').config();

const app = express()
const PORT = process.env.PORT || 8000
const MONGODB_URI = process.env.MONGO_URI

// middleware
app.use(express.json())
app.use(cors())

// routes
// register
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, msg: "Missing Details" })
  }
  try {
    // check whether the email is unique
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, msg: "Email already exists" })
    }
    const newUser = await UserModel.create({ email, password });
    res.status(201).json({ success: true, user: newUser });
  } catch (err) {
    res.json({ success: false, msg: err.message })
  }
})

// login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, msg: "Missing Details" });
  }
  try {
    const user = await UserModel.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(400).json({ success: false, msg: "You have entered incorrect email or password." });
    }

    res.status(200).json({ success: true, msg: "Login successful" });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
});



// connect to database
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MONGODB');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (err) {
    console.error(err);
    // exit the program
    process.exit(1)
  }
}

connectDB();