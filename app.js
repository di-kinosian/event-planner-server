const express = require('express');
const cors = require('cors');
const eventRoutes = require('./routes/eventRoutes');

const app = express();

// Middleware
app.use(express.json());
// Use CORS middleware with default settings (allows all origins)
app.use(cors());

// Routes
app.use('/api', eventRoutes);

module.exports = app;
