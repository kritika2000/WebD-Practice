import logo from "./logo.svg";
import "./App.css";
import NewJSFeatures from "./Components/NewJSFeatures";
import Child from "./Components/Child";
import Card from "./Components/Card3";
import CardClass from "./Components/CardClass";
import RoundedImg from "./Components/RoundedImg";

function App() {
  return (
    <div className="App">
      {/* <NewJSFeatures />
      <Child /> */}
      {/* <Card cardColor="red" height={200} width={200} />
      <Card cardColor="blue" height={200} />
      <Card cardColor="green" width={250} /> */}
      {/* <CardClass cardColor="red" height={200} width={200} />
      <CardClass num={2} />
      <CardClass cardColor="green" num={3} width={250} /> */}
      <RoundedImg
        src="https://picsum.photos/id/237/300/300"
        borderRadius="10px"
      />
    </div>
  );
}

export default App;
