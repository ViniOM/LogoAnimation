import Logo from "./logo.svg";
import "./App.css";
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
      <Home img={Logo} />
    </div>
  );
}

export default App;
