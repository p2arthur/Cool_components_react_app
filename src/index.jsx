import "./assets/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//7) Import the Provider of our context inside our index
import { NavigationProvider } from "./context/navigation";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

//8) Wrap the App component with the NavigationProvider to enable nested components to have access to the context
root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
