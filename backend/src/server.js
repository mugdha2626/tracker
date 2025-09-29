require('dotenv').config();

const express = require('express');
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

// MongoDB connection and class data loading removed - using hardcoded data instead
console.log('Using hardcoded class data - MongoDB connection not required');

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
  process.exit(0);
});