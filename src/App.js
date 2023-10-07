import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import CounterUsingReducer from "./components/CounterUsingReducer";

function App() {
  return (
    <div className="App">
      <Counter />
      <CounterUsingReducer />
    </div>
  );
}

export default App;
