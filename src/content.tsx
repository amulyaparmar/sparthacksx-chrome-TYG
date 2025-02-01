import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Popup from "./contentScripts/Popup";
// import App from "./App"

// Create a root div for injecting the React app content into the page
const root = document.createElement("div");
root.id = "crx-root";
document.body.appendChild(root);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
