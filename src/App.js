import { useState } from "react";

import "./App.css";

import Button from "./components/Button";
import Counter from "./components/Counter";

const texts = [
  "Click me 1",
  "Click me 2",
  "Click me 3",
  "Click me 4",
  "Click me 5",
];

function App() {
  console.log("App rendered");
  const [clickCounter, setClickCounter] = useState(0);

  const handleButtonClick = () => {
    setClickCounter(clickCounter + 1);
  };

  return (
    <div className="App">
      <Counter clickNumber={clickCounter} />
      {texts.map((text, index) => {
        return (
          <Button
            incrementCounter={handleButtonClick}
            text={text}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default App;
