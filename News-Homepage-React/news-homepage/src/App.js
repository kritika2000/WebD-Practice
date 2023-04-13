import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Sidebar />
      <div>
        <List />
      </div>
    </div>
  );
}

export default App;
