// Конфигурация приложения
export const APP_CONFIG = {
  name: "My Awesome App",
  version: "1.0.0",
  author: "Developer",
  features: {
    counter: true,
    welcome: true,
    animations: true,
  },
  theme: {
    primary: "#61dafb",
    secondary: "#ff6b6b",
    background: "#282c34",
    text: "#ffffff",
  },
  settings: {
    defaultCount: 0,
    showWelcomeByDefault: true,
    animationSpeed: "normal",
  },
};

export const FEATURE_FLAGS = {
  ENABLE_DARK_MODE: true,
  ENABLE_ANIMATIONS: true,
  ENABLE_SOUND_EFFECTS: false,
  ENABLE_ANALYTICS: false,
};

export const API_ENDPOINTS = {
  base: "https://api.example.com",
  users: "/users",
  posts: "/posts",
  comments: "/comments",
};
