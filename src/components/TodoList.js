import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({
  todos,
  onToggleComplete,
  onDeleteTodo,
  onUpdateTodo
}) => {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDeleteTodo={onDeleteTodo}
          onUpdateTodo={onUpdateTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
