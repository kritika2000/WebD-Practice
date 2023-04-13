import "./App.css";
import Header from "./Header";
import Button from "./Button";
import { ThemeContext } from "./themeContext";

function App() {
  return (
    <div className="App">
      <Header />
      <ThemeContext.Consumer>
        {({ theme, handleThemeChange }) => (
          <Button theme={theme} handleOnClick={handleThemeChange} />
        )}
      </ThemeContext.Consumer>
      {/* <Button /> */}
    </div>
  );
}

export default App;
