const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const weatherRoutes = require('./routes/weather');

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '.env') });

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());

// Log environment variables (for debugging)
console.log('API Key:', process.env.OPENWEATHER_API_KEY ? 'Present' : 'Missing');

// Use weather routes
app.use('/weather', weatherRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
}); 