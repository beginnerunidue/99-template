function Button({ incrementCounter }) {
  console.log("Button rendered");
  return <button onClick={incrementCounter}>Click me!</button>;
}

export default Button;
