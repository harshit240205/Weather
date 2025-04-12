const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Weather Route
app.get('/api/weather', async (req, res) => {
    try {
        const { city } = req.query;
        
        if (!city) {
            return res.status(400).json({ error: 'City name is required' });
        }

        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
        );

        const weatherData = {
            temperature: response.data.main.temp,
            condition: response.data.weather[0].main,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            humidity: response.data.main.humidity,
            windSpeed: response.data.wind.speed,
            city: response.data.name,
            country: response.data.sys.country
        };

        res.json(weatherData);
    } catch (error) {
        console.error('Error:', error.response?.data || error.message);
        if (error.response?.status === 404) {
            return res.status(404).json({ error: 'City not found' });
        }
        res.status(500).json({ error: 'Error fetching weather data' });
    }
});

// Test route
app.get('/test', (req, res) => {
    res.json({ message: 'Server is working!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log('API Key:', process.env.OPENWEATHER_API_KEY ? 'is set' : 'is not set');
}); 