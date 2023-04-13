import logo from "./logo.svg";
import "./App.css";
import { Link, Routes, Route, useMatch } from "react-router-dom";
import Home from "./Components/Home";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
import Profile from "./Components/profile/Profile";
import Info from "./Components/profile/Info";
import ProfileSettings from "./Components/profile/Settings";
import Header from "./Components/Header";
import ServiceDetail from "./Components/services/ServiceDetail";
import ServiceList from "./Components/services/ServiceList";
import serviceData from "./Components/services/serviceData";

// https://v5.reactrouter.com/web/example/url-params

// In navigation bars, we have uls -> lis -> a tags.
/**
 *
 * Anytime we want to move/route to a navigation link, we have to use Link
 * Component. Link only changes the url to the path specified in Link Component.
 * If we really want to switch to the component, we need to use Switch(now Routes).
 */

function App() {
  return (
    <div className="App">
      {/* 
        Link Only chnages the url 
        Link accepts 'to' prop
        Inbuilt <a></a> tags.
      */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        {/* <Link to="/contact">Contact</Link> */}
      </nav>
      {/* It works like -> if the path starts with 'specified path' then render element */}
      {/***************** One Way *******************
       * -> before v6
       path -> 1. sort of an if statement
                    2. if the path starts with not exactly match then render the component/JSX 
      '/' and '/about' both starts with '/' so browser is confused which one to render.
        Easy way to solve this is to put '/about' above the '/' so that '/about' is matched first.
      */}
      {/* Switch not found in react-router-dom  as in v6 Switch is replaced by Routes */}
      {/* <Switch> */}
      {/* <Route path="/" render={() => <h1>Home Page</h1>} /> */}
      {/* <Route path="/about" render={() => <h1>About Page</h1>} />
        <Route path="/contact" element={() => <Contact />} />
        <Route path="/" render={() => <h1>Home Page</h1>} />
      </Switch> */}
      {/**************** Second Way -> After v6 *************/}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      {/*********************************** NESTED ROUTES *********************************/}
      {/* <Header /> */}
      {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="services/" element={<ServiceList />}></Route>
        {serviceData.map((service) => (
          <Route
            // parameters in the URL
            path={`services/:serviceId`}
            element={<ServiceDetail />}
          ></Route>
        ))}
         //<Route exact path={`services/${1}`} element={<ServiceDetail />}></Route>
        </Routes> */}
      <Routes>
        <Route exact path="profile/" element={<Profile />} />
        <Route path={`/profile/info`} element={<Info />} />
        <Route path={`/profile/settings`} element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default App;
