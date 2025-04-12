import React from 'react';

const WeatherCard = ({ weatherData }) => {
    if (!weatherData) return null;

    const {
        temperature,
        condition,
        description,
        icon,
        humidity,
        windSpeed,
        city,
        country
    } = weatherData;

    return (
        <div className="weather-card">
            <div className="weather-header">
                <h2>{city}, {country}</h2>
                <img
                    src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt={description}
                    className="weather-icon"
                />
            </div>
            <div className="weather-details">
                <div className="temperature">
                    <h3>{Math.round(temperature)}°C</h3>
                    <p className="condition">{condition}</p>
                    <p className="description">{description}</p>
                </div>
                <div className="weather-info">
                    <p><span>Humidity:</span> {humidity}%</p>
                    <p><span>Wind Speed:</span> {windSpeed} m/s</p>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard; 