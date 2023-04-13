import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeContextProvider } from "./Components/themeContext";
// import ThemeContext from "./Challenge1/userContext";

// const ThemeContext = React.createContext();
// ThemeContext is an object which has a provider and a consumer property Components.
// const { Provider } = ThemeContext;
// Context works around provider and consumer.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // value props is mandatory.
  <ThemeContextProvider>
    {/* App component is the provider now. */}
    <App />
  </ThemeContextProvider>
);
