import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import data from "./Components/data";

function App() {
  /* Warning: Each child in a list should have a unique "key" prop.
  Anytime we use map() method for displaying a list of components/items.
  -> add a unique key prop to remove this warning.
  */
  const cards = data.map((d) => {
    return (
      /* We can pass the whole data item to the Card as props -> item={item}.
      instead of passing individual props.
      */
      <Card
        key={d.id}
        // img={d.coverImg}
        // rating={d.stats.rating}
        // reviewCount={d.stats.reviewCount}
        // location={d.location}
        // title={d.title}
        // price={d.price}
        // openSpot={d.openSpots}

        // item={d}
        /*Using spread operator => it is similar to passing individual props */
        {...d}
      />
    );
  });
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards--container">{cards}</section>
    </div>
  );
}

export default App;
