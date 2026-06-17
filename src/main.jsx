import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import MovieProvider from "./context/Moviecontext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MovieProvider>
      <App />
    </MovieProvider>
  </StrictMode>
);
