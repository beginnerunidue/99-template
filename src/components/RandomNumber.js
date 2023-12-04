import { useState } from "react";

import generateRandomNum from "../utils/generateRandomNum";
function RandomNumber({ maxNum }) {
  const [randomNum, setRandomNum] = useState(generateRandomNum(maxNum));
  // console.log("Random Number", maxNum);
  console.log("rendered");

  const handleOnClick = () => {
    setRandomNum(generateRandomNum(maxNum));
  };

  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={handleOnClick}>Generate new random number</button>
    </div>
  );
}

export default RandomNumber;
