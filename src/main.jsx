import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; 
//import "./index.css"; // Optional: Add global styles if needed

// Render the React app into the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
