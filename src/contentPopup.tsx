import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NotificationPopup from "./contentScripts/NotificationPopup";

// Create a root div for injecting the React app content into the page
const root = document.createElement("div");
root.id = "crx-popup-top-right";
document.body.appendChild(root);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <NotificationPopup 
    title="New Message!"
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci
            blanditiis voluptates eum. Nam, cum minima?"
    />
  </React.StrictMode>
);
