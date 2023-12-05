function Button({ incrementCounter, text }) {
  console.log("Button rendered");
  return <button onClick={incrementCounter}>{text}</button>;
}

export default Button;
