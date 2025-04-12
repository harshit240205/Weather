# Weather Dashboard

A real-time weather dashboard built with MERN stack (MongoDB, Express, React, Node.js) that allows users to search for weather information by city name.

## Features

- Real-time weather data using OpenWeatherMap API
- Clean and responsive UI
- Error handling for invalid cities
- Loading states and error messages

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- OpenWeatherMap API key

## Setup

1. Clone the repository
2. Install backend dependencies:
   ```bash
   cd server
   npm install
   ```
3. Install frontend dependencies:
   ```bash
   cd ../client
   npm install
   ```
4. Create a `.env` file in the server directory with your OpenWeatherMap API key:
   ```
   PORT=5000
   OPENWEATHER_API_KEY=your_api_key_here
   ```

## Running the Application

1. Start the backend server:
   ```bash
   cd server
   npm start
   ```

2. Start the frontend development server:
   ```bash
   cd client
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

## API Endpoints

- `GET /api/weather?city={cityName}` - Returns weather data for the specified city

## Technologies Used

- Frontend: React, Axios
- Backend: Node.js, Express
- API: OpenWeatherMap
