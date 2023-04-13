function ReactPage() {
  return (
    <div>
      <header>
        <nav>
          <img
            // can add height width property without inline styling.
            width="50px"
            src="../resources/react-logo.png"
          ></img>
        </nav>
      </header>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
      <footer>
        <small>© 2021 Kritika development. All rights reserved.</small>
      </footer>
    </div>
  );
}
ReactDOM.render(<ReactPage />, document.getElementById("root"));
