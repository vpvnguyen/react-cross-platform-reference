import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>{process.env.NODE_ENV}</p>
      <p>{process.env.REACT_APP_STAGE}</p>
    </div>
  );
}

export default App;
