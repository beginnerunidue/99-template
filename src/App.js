import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    console.log("Callback in useEffect called");
    fetch("https://jsonplaceholder.typicode.com/todos/5")
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []);

  console.log("App rendered", todo);

  return (
    <div className="App">
      {todo !== null ? (
        <h3>
          id: {todo.id} title: {todo.title}
        </h3>
      ) : (
        <div>
          <h3>todo is jet null</h3>
        </div>
      )}
    </div>
  );
}

export default App;
