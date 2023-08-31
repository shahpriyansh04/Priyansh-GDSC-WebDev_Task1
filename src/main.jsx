import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider as MaterialThemeProvider } from "@material-tailwind/react";
import { ThemeProvider } from "next-themes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <MaterialThemeProvider>
        <App />
      </MaterialThemeProvider>
    </ThemeProvider>
  </React.StrictMode>
);
