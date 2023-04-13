import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import data from "./Components/data";
import CardItem from "./Components/CardItem";

function App() {
  const cards = data.map((d) => {
    return (
      <>
        <CardItem key={d.id} {...d} />
        <hr />
      </>
    );
  });
  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
