import React from "react";

function Welcome({ name = "Developer" }) {
  return (
    <div className="welcome-container">
      <h2>Добро пожаловать в {name}!</h2>
      <p>Это тестовый компонент для проверки git истории</p>
      <div className="welcome-features">
        <span className="feature">🚀 React 19</span>
        <span className="feature">⚡ Быстрая разработка</span>
        <span className="feature">🎨 Современный UI</span>
      </div>
    </div>
  );
}

export default Welcome;
