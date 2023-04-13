import logo from "./logo.svg";
import "./App.css";
import {
  Route,
  Routes,
  Link,
  useRoutes,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Home from "./Components/Home";
import BookList from "./Components/BookList";
import BookSideBar from "./Components/BookSideBar";
import Book from "./Components/Book";
import NewBook from "./Components/NewBook";
import BooksLayout from "./Components/BooksLayout";
import OtherLayout from "./Components/OtherLayout";
import Contact from "./Components/Contact";
import About from "./Components/About";
import BookRoutes from "./Components/BookRoutes";
import { SearchExample } from "./Components/SearchExample";

//https://blog.webdevsimplified.com/2022-07/react-router/

// function App() {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/books">Books</Link>
//           </li>
//         </ul>
//       </nav>
{
  /* <aside>
        <Routes> */
}
{
  /* <Route path="/books" element={<BookSidebar />}> */
}
{
  /* <Route path="/books" element={<BookSideBar />} />
        </Routes>
      </aside> */
}
// <Routes>
//   <Route path="/" element={<Home />} />
{
  /* <Route path="/books" element={<BookList />} /> */
}
// <Route path="/books/*" element={<BookRoutes />} />
{
  /* Nested Routes */
}
{
  /* <Route path="/books" element={<BooksLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route> */
}
{
  /* <Route element={<OtherLayout />}>
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route> */
}
{
  /* <Route path="*" element={<h1>Not Found</h1>} /> */
}
{
  /* </Routes>
    </>
  );
} */
}

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/books",
      // element: <BooksLayout />,
      children: [
        { index: true, element: <BookList /> },
        { path: ":id", element: <Book /> },
        { path: "new", element: <NewBook /> },
      ],
    },
  ]);

  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  function handleClick() {
    setTimeout(() => {
      navigate("books/new", {
        replace: true,
        state: { bookName: "Fake Title" },
      });
    }, 2000);
  }
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <button onClick={handleClick}>Wait for 2 seconds</button>
      {element}
      <SearchExample />
    </>
  );
}

export default App;
