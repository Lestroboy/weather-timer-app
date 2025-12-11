# weather-timer-app
A modern, responsive React web application that displays live weather, current AQI (Air Quality Index), and includes a built-in timer. The UI supports Light / Dark mode, adapts to mobile layouts, and offers a clean dashboard-style interface.

## Features
- Detects location using Geolocation  
- Fetches live weather and AQI from OpenWeather API  
- Displays:
  - Temperature (°C)  
  - Weather condition icon (sun, clouds, rain, etc.)  
  - AQI (1–5) with category (Good → Very Poor) and health description  
- Auto-refresh every 10 minutes  
- Simple timer with Start / Stop / Reset  
- Light / Dark mode toggle — theme preference saved in `localStorage`  
- Responsive layout:
  - Desktop: weather on left, timer on right  
  - Mobile: weather on top, timer below  

## Tech Stack
- React (functional components + hooks)  
- CSS for styling and responsive layout  
- OpenWeather API for weather & AQI data  
- Browser Geolocation API  

## Setup & Run
1. Clone the repository  
2. Install dependencies:
   ```bash
   npm install
   ```  
3. Add your OpenWeather API key in the code  
4. Run the app:
   ```bash
   npm run dev
   ```

## Project Structure
```
src/
├── components/
│   ├── Temperature.jsx
│   ├── WeatherIcon.jsx
│   ├── Timer.jsx
│   └── DarkModeToggle.jsx
├── styles/
│   ├── global.css (optional)
│   ├── Temperature.css
│   ├── Timer.css
│   ├── WeatherIcon.css
│   └── DarkModeToggle.css
└── App.jsx
```
