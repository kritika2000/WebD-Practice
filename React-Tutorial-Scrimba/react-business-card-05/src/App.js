import logo from "./logo.svg";
import "./App.css";
import Image from "./Components/Image";
import Button from "./Components/Button";
import About from "./Components/About";
import Interests from "./Components/Interests";
import Media from "./Components/Media";

function App() {
  return (
    <div className="App">
      <Image />
      <Button />
      <About />
      <Interests />
      <Media />
    </div>
  );
}

export default App;
