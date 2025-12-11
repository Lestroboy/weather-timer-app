import React, { useState } from "react";
import "../styles/global.css";

function DarkModeToggle() {
  // Derive initial state from body class or localStorage
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark" || document.body.classList.contains("dark")
  );

  // Toggle theme
  function toggleTheme() {
    const newMode = !dark;
    setDark(newMode);

    if (newMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <button className="theme-toggle-btn" onClick={toggleTheme}>
      {dark ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}

export default DarkModeToggle;