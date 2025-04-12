import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './App.css';

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchWeather = async (city) => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`http://localhost:5000/api/weather?city=${encodeURIComponent(city)}`);
            setWeatherData(response.data);
        } catch (err) {
            console.error('Error:', err);
            setError(err.response?.data?.error || 'Error fetching weather data');
            setWeatherData(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App">
            <h1>Weather Dashboard</h1>
            <SearchBar onSearch={fetchWeather} />
            {loading && <p className="loading">Loading...</p>}
            {error && <p className="error">{error}</p>}
            {weatherData && <WeatherCard weatherData={weatherData} />}
        </div>
    );
}

export default App; 
