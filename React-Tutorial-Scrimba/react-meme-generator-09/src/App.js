import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Meme from "./Components/Meme";
import MemeChallenge from "./Components/MemeChallenge";
import CounterChallenge from "./Count";
import AddItemChallenge from "./AddItemChallenge";
import State from "./State";
import Counter from "./Counter";
import ContactCard from "./ContactCard";

function App() {
  return (
    <div className="App">
      <Header />
      <Meme />
      {/* <MemeChallenge /> */}
      {/* <AddItemChallenge /> */}
      {/* <State /> */}
      {/* <Counter /> */}
      {/* <ContactCard /> */}
    </div>
  );
}

export default App;
