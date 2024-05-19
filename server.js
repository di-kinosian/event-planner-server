const http = require('http');
const app = require('./app');
const connectDB = require('./config/db');
require('dotenv').config();

const port = process.env.PORT || 5001;

// Connect to MongoDB
connectDB();

// Create HTTP server
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
