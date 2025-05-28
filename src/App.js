import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./styles/App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Try the sticky note UI",
      description: "See how details expand just for this note.",
      isCompleted: false,
      duration: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
    {
      id: 2,
      title: "Another note",
      description: "You can edit, delete, and expand details individually.",
      isCompleted: false,
      duration: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const handleAddTodo = (title, description) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title,
        description,
        isCompleted: false,
        duration: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  const handleToggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleUpdateTodo = (id, title, description) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, title, description } : todo
      )
    );
  };

  return (
    <div className="app">
      <div className="app-header">
        <h1>To Do  </h1>
        <div className="header-actions">
          <button className="bulk-action-btn" onClick={() => setTodos([])}>
            Clear All
          </button>
        </div>
      </div>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onToggleComplete={handleToggleComplete}
        onDeleteTodo={handleDeleteTodo}
        onUpdateTodo={handleUpdateTodo}
      />
    </div>
  );
}

export default App;
