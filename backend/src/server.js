require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

const PORT = 3000;

app.use(helmet());
app.use(cors({
  origin: ['chrome-extension://*'], 
  methods: ['GET'],
  credentials: false
}));

app.use(express.json());

const { addCS211 } = require('./models/addCS211');
mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    // Add CS211 data if it doesn't exist (both dev and production)
    await addCS211();
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });

app.get('/', (req, res) => {
  res.json({
    message: 'Class Reminder API is running!',
    version: '1.0.0',
    status: 'healthy'
  });
});

const classRoutes = require('./routes/classes');
app.use('/api/classes', classRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📄 Environment: ${process.env.NODE_ENV}`);
});

process.on('SIGTERM', async () => {
  console.log('SIGTERM received, shutting down gracefully');
  await mongoose.connection.close();
  process.exit(0);
});