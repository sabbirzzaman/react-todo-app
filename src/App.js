import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";
import TodoItem from "./TodoItem";
import "./styles.css";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setErrorMsg("");
    if (inputValue.trim() === "") {
      setErrorMsg("Todo can't be empty, please add a todo");
      return;
    }
    setTodos([...todos, { todoText: inputValue, todoId: uuidv4() }]);
    setInputValue("");
  };

  const removeTodo = id => {
    setTodos(todos.filter(todoItem => todoItem.todoId !== id));
  };

  return (
    <div className="App">
      <div className="container">
      <div className="app-title">
        <h3>Todo App</h3>
      </div>
        <Form
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSubmit={handleSubmit}
        />
        <p className="errorMsg">{errorMsg}</p>
        <TodoItem removeTodo={removeTodo} todos={todos} errorMsg={errorMsg} />
      </div>
    </div>
  );
}
