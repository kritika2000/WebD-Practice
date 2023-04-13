import logo from "./logo.svg";
import "./App.css";
import CustomHook from "./Components/CustomHook";
import Favourite from "./Components/Favourite";
import Menu from "./Components/Menu";

function App() {
  return (
    <div className="App">
      <CustomHook />
      <Favourite />
      <Menu />
    </div>
  );
}

export default App;
