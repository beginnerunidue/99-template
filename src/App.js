import "./App.css";

import MyCompo from "./components/MyComponent";
import MySecondComponent from "./components/MySecondComponent";
import PetInfo from "./components/Petinfo.js";

function App() {
  const catAge = +9;
  const dogAge = 10;

  return (
    <div className="App">
      <MyCompo />
      <MySecondComponent />
      <MyCompo />
      <MySecondComponent />
      <PetInfo animal="cat" age={catAge} hasPet={true} />
      <PetInfo animal="dog" age={dogAge} hasPet />
      <PetInfo hasPet={false} />
    </div>
  );
}

export default App;
