// WeatherIcon.jsx
import "../styles/global.css";

function WeatherIcon({ condition }) {
  // condition = weatherData.weather[0].main (e.g., "Clouds", "Rain")

  function renderIcon() {
    switch (condition) {
      case "Clear":
        return <span className="wi wi-day-sunny"></span>;

      case "Clouds":
        return <span className="wi wi-cloudy"></span>;

      case "Rain":
        return <span className="wi wi-rain"></span>;

      case "Drizzle":
        return <span className="wi wi-sprinkle"></span>;

      case "Thunderstorm":
        return <span className="wi wi-thunderstorm"></span>;

      case "Snow":
        return <span className="wi wi-snow"></span>;

      case "Mist":
      case "Fog":
      case "Haze":
        return <span className="wi wi-fog"></span>;

      default:
        return <span className="wi wi-na"></span>;
    }
  }

  return <div className="weather-icon">{renderIcon()}</div>;
}

export default WeatherIcon;