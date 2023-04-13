/* It's always a good idea to create meaningful components instead of putting 
all JSX inside a single component/function.
*/
function Header() {
  return (
    <header>
      <nav>
        <img
          // can add height width property without inline styling.
          width="50px"
          src="../resources/react-logo.png"
        ></img>
      </nav>
    </header>
  );
}
function MainContent() {
  return (
    <React.Fragment>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </React.Fragment>
  );
}
function Footer() {
  return (
    <footer>
      <small>© 2021 Kritika development. All rights reserved.</small>
    </footer>
  );
}
function ReactPage() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
ReactDOM.render(<ReactPage />, document.getElementById("root"));
