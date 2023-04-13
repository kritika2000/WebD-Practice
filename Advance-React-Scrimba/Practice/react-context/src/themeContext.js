import React, { useState } from "react";
const ThemeContext = React.createContext();

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState("light");

  function handleThemeChange() {
    setTheme(() => {
      return theme == "light" ? "dark" : "light";
    });
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        handleThemeChange,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
