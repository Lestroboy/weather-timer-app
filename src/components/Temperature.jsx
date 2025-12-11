import { useEffect, useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "../styles/global.css";

const API_KEY = "551304b9a7363f963423730354edd0c1";

function Temperature() {
  const [condition, setCondition] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [aqi, setAqi] = useState(null);
  const [aqiCategory, setAqiCategory] = useState("");
  const [aqiDescription, setAqiDescription] = useState("");
  const [error, setError] = useState("");

  // AQI helper
  function getAQIDetails(value) {
    switch (value) {
      case 1:
        return {
          category: "Good",
          description: "Air quality is ideal for most individuals.",
        };
      case 2:
        return {
          category: "Fair",
          description: "Acceptable air quality; minor pollutants present.",
        };
      case 3:
        return {
          category: "Moderate",
          description:
            "May cause slight discomfort to sensitive individuals.",
        };
      case 4:
        return {
          category: "Poor",
          description: "Sensitive groups should avoid strenuous outdoor activity.",
        };
      case 5:
        return {
          category: "Very Poor",
          description:
            "Health risk for everyone; outdoor activity not recommended.",
        };
      default:
        return {
          category: "Unknown",
          description: "No AQI data available.",
        };
    }
  }

  // SAFE FETCHING: Runs ONLY once + every 10 minutes
  useEffect(() => {
    let isMounted = true; // Protects from unwanted updates

    async function loadData() {
      if (!navigator.geolocation) {
        if (isMounted) setError("Geolocation not supported.");
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            // FETCH WEATHER
            const weatherRes = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
            );
            const weatherData = await weatherRes.json();

            // FETCH AQI
            const aqiRes = await fetch(
              `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
            );
            const aqiData = await aqiRes.json();

            if (!isMounted) return;

            // Update state safely
            const aqiValue = aqiData.list?.[0]?.main?.aqi ?? null;

            setTemperature(weatherData.main?.temp ?? null);
            setCondition(weatherData.weather?.[0]?.main ?? "");
            setAqi(aqiValue);

            const { category, description } = getAQIDetails(aqiValue);
            setAqiCategory(category);
            setAqiDescription(description);
          } catch {
            if (isMounted) setError("Failed to fetch data.");
          }
        },
        () => {
          if (isMounted) setError("Location permission denied.");
        }
      );
    }

    // Initial load
    loadData();

    // Refresh every 10 minutes
    const interval = setInterval(loadData, 10 * 60 * 1000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="temperature-container">
      {error && <div className="error">{error}</div>}

      {!error && (
        <>
          <WeatherIcon condition={condition} />

          <div className="temperature-value">
            {temperature !== null ? `${temperature}°C` : "Loading temperature..."}
          </div>

          <div className="aqi-value">
            {aqi !== null ? `AQI: ${aqi} - ${aqiCategory}` : "Loading AQI..."}
          </div>

          <div className="aqi-description">{aqiDescription}</div>
        </>
      )}
    </div>
  );
}

export default Temperature;