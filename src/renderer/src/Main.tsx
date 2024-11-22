import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.css";

const root = createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
