import Temperature from "./components/Temperature";
import DarkModeToggle from "./components/DarkModeToggle";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="app-container">
      {/* Dark mode toggle */}
      <header className="app-header">
        <DarkModeToggle/>
      </header>

      {/* Main content */}
      <main className="dashboard-content">
        <div className="weather-section">
          <Temperature/>
        </div>

        <div className="timer-section">
          <Timer/>
        </div>
      </main>
    </div>
  );
}

export default App;