import { useState } from "react";

import generateRandomNum from "../utils/generateRandomNum";
function RandomNumber() {
  const [randomNum, setRandomNum] = useState(generateRandomNum());

  const handleOnClick = () => {
    setRandomNum(generateRandomNum());
  };

  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={handleOnClick}>Generate new random number</button>
    </div>
  );
}

export default RandomNumber;
