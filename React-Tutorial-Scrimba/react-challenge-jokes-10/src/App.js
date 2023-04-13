import logo from "./logo.svg";
import "./App.css";
import Joke from "./Components/Joke";
import jokesData from "./Components/JokesData";

function App() {
  const colors = [
    <h1>Red</h1>,
    <h1>Orange</h1>,
    <h1>Blue</h1>,
    <h1>Purple</h1>,
  ];
  // displaying and array of Joke component using map() method.
  const jokeElements = jokesData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />;
  });
  return (
    <div className="App">
      {jokeElements}
      {/* <Joke
        // setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
        isPun={true}
        upvotes={10}
        downvotes={2}
      />
      <Joke
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
        // passing data types other than strings as props.
        isPun={false}
      />
      <Joke
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
        isPun={true}
      />
      <Joke
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
        isPun={false}
      /> */}
    </div>
  );
}
export default App;
