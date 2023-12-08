import { useState } from "react";

import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    setTodos([...todos, text]);
  };

  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {todos.length ? (
        <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
      ) : (
        <h1>You don't have any Todo Entries</h1>
      )}
    </div>
  );
}

export default App;
