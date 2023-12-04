import { useState } from "react";

import "./App.css";

import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
  console.log("App rendered");
  const [clickCounter, setClickCounter] = useState(0);

  const handleButtonClick = () => {
    setClickCounter(clickCounter + 1);
  };

  return (
    <div className="App">
      <Counter clickNumber={clickCounter} />
      <Button incrementCounter={handleButtonClick} />
      <Button incrementCounter={handleButtonClick} />
      <Button incrementCounter={handleButtonClick} />
      <Button incrementCounter={handleButtonClick} />
    </div>
  );
}

export default App;
