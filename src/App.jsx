import logo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.cjr.org.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mais Sobre a CJR
        </a>
      </header>
    </div>
  );
}

export default App;
