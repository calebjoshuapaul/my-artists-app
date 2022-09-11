import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ArtistProvider } from "./context/ArtistContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ArtistProvider>
      <App />
    </ArtistProvider>
  </React.StrictMode>
);
