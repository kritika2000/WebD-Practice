const navbar = (
  <nav>
    <h1>Kritika's Bistro</h1>
    <ul>
      <li>Menu</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);
/* navbar return an object which contains info about the JSX code,
that's why we can't use append()  method to append html 
like JSX to the root element. 
React converts this JS object to real DOM elements when we render it using ReactDOM.render()
 */
console.log(navbar);
// const h1 = document.createElement("h1");
// h1.textContent = "Hello";
ReactDOM.render(navbar, document.getElementById("root"));
console.log(<h1>Hello</h1>);

// document.getElementById("root").append(navbar.props.children[0].props.children);
