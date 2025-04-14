// server.js

import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'; // ✅ for allowing frontend requests
import reservationRoutes from './routes/reservationRoutes.js';

dotenv.config();

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected successfully');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1); 
  }
};

connectDB();

const app = express();
app.use(cors()); // ✅ important for frontend connection
app.use(express.json()); // ✅ for parsing JSON bodies

// ✅ Basic route to test if backend is working
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Routes
app.use('/api/reservations', reservationRoutes);

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
