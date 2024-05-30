const express = require('express');
const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const imageRoutes = require('./routes/imageRoutes');
const { errorHandler } = require('./middlewares/errorMiddleware');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/auth', authRoutes);
app.use('/api/images', imageRoutes);

app.use(errorHandler);

module.exports = app;
