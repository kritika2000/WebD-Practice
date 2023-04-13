import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import { useRoutes } from "react-router-dom";
import Photos from "./Pages/Photos";
import Cart from "./Pages/Cart";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Photos />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);
  return (
    <div>
      <Header />
      {routes}
    </div>
  );
}

export default App;
