import logo from "./logo.svg";
import "./App.css";
import cat1 from "./images/mr-whiskerson.png";
import cat2 from "./images/fluffykins.png";
import cat3 from "./images/felix.png";
import cat4 from "./images/pumpkin.png";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        img={cat1}
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img={cat2}
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img={cat3}
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        img={cat4}
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  );
}

export default App;
