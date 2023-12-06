import "./App.css";

import Wrapper from "./components/Wrapper";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h2>Text inside of the blue Wrapper</h2>
        <button>Click me!</button>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h2>Text inside of the green Wrapper</h2>
        <button>Click me!</button>
        <input type="text" placeholder="Enter value" />
      </Wrapper>
      <Login />
    </div>
  );
}

export default App;
