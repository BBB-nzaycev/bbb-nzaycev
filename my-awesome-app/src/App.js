import React, { useState } from "react";
import logo from "./logo.svg";
import Welcome from "./Welcome";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  const toggleWelcome = () => {
    setShowWelcome(!showWelcome);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {showWelcome && <Welcome name="My Awesome App" />}

        <div className="counter-section">
          <p>
            Счетчик кликов: <strong>{count}</strong>
          </p>
          <button onClick={handleClick} className="counter-btn">
            Нажми меня!
          </button>
        </div>

        <button onClick={toggleWelcome} className="toggle-btn">
          {showWelcome ? "Скрыть" : "Показать"} приветствие
        </button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Изучить React
        </a>
      </header>
    </div>
  );
}

export default App;
