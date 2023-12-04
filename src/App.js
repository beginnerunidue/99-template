import "./App.css";

import RandomNumber from "./components/RandomNumber";

function App() {
  let maxNum = +1000;
  return (
    <div className="App">
      <RandomNumber maxNum={maxNum} />
    </div>
  );
}

export default App;
