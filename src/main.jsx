import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "#020617",
          color: "#3b82f6",
          border: "1px solid #1e293b",
        },
      }}
    />
    <App />
  </StrictMode>,
);
