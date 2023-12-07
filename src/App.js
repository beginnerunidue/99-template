import Posts from "./components/Posts";
import Info from "./components/Info";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* CSS rule from the Info.css module doesn't work here */}
      <div className="info">
        <h1>Section 23 - Lernen CSS-MODULES</h1>
        <button className="my-button">Button ganz oben in App.js</button>
      </div>
      <Info />
      <h1>Posts</h1>
      <hr></hr>
      <Posts />
    </div>
  );
}

export default App;
