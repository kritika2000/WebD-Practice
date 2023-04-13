/* React is composable i.e. we can create our custom components
and reuse them again and again. */
// Function Component
// Component's name must begin with capital letter known as Pascal Case.
function ReactPage() {
  return (
    <div>
      <img
        // can add height width property without inline styling.
        style={{ width: 100, height: 100 }}
        src="../resources/react-logo.png"
      ></img>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has ell over 100K start on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Power thousands of enterprise apps, including mobile apps.</li>
      </ul>
    </div>
  );
}
// instead of calling the function we need to put the name inside angular brackets.
// ReactDOM.render(reactPage(), document.getElementById("root"));
ReactDOM.render(<ReactPage />, document.getElementById("root"));
