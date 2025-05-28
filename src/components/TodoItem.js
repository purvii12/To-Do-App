import React, { useState } from 'react';
import '../styles/TodoItem.css';

const TodoItem = ({
  todo,
  onDeleteTodo,
  onUpdateTodo,
  onToggleComplete,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description);

  const handleSave = () => {
    onUpdateTodo(todo.id, editTitle, editDescription);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(todo.title);
    setEditDescription(todo.description);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item${todo.isCompleted ? ' completed' : ''}`}>
      <div className="todo-main">
        <div className="todo-header">
          <button
            className={`circle-tick${todo.isCompleted ? ' checked' : ''}`}
            onClick={() => onToggleComplete(todo.id)}
            aria-label={todo.isCompleted ? "Mark as incomplete" : "Mark as complete"}
          >
            {todo.isCompleted ? (
              <svg width="26" height="26" viewBox="0 0 26 26">
                <circle cx="13" cy="13" r="12" fill="#a084e8" stroke="#a084e8" strokeWidth="2"/>
                <polyline points="8,14 12,18 18,9" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="26" height="26" viewBox="0 0 26 26">
                <circle cx="13" cy="13" r="12" fill="none" stroke="#d1c4e9" strokeWidth="2"/>
              </svg>
            )}
          </button>
        </div>
        <div className="todo-content">
          {isEditing ? (
            <input
              type="text"
              value={editTitle}
              onChange={e => setEditTitle(e.target.value)}
              className="edit-input"
              autoFocus
            />
          ) : (
            <>
              <span className={`todo-title${todo.isCompleted ? ' strikethrough' : ''}`}>{todo.title}</span>
              <span className="todo-duration">{todo.duration}</span>
            </>
          )}
        </div>
        <div className="todo-actions">
          {isEditing ? (
            <>
              <button onClick={handleSave} className="save-btn" aria-label="Save">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12l5 5L20 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button onClick={handleCancel} className="cancel-btn" aria-label="Cancel">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="edit-btn"
                aria-label="Edit"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M8.67 6.75a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-5.25 5.25H4.5v-2.19l5.25-5.25a.75.75 0 0 1 1.06 0z" fill="currentColor"/>
                </svg>
              </button>
              <button
                onClick={() => onDeleteTodo(todo.id)}
                className="delete-btn"
                aria-label="Delete"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M6 7v7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V7" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M9 3h0a1 1 0 0 1 1 1v1H8V4a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M4 7h10" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
