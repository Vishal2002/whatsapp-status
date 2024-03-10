const express = require('express');
const mongoose = require('mongoose');
const UserStatus = require('./db/db');
const {upload}=require('./middlewares/upload');

require('dotenv').config();
const app = express();


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Upload status route
app.post('/upload-status', upload.single('status'), async (req, res) => {
  try {
    const userId = req.body.userId; // You can get from the token in authorization headers or give it random manually
    const statusContent = req.file.location //Your Image or the Video Status

    const newStatus = new UserStatus({ userId, statusContent });
    await newStatus.save();

    res.status(200).json({ message: 'Status uploaded successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error uploading status' });
  }
});

app.listen(process.env.PORT, () => console.log('Server started on port 3000'));