import React, { useState } from 'react';

const AddTodo = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTodo(title.trim(), description.trim());
      setTitle('');
      setDescription('');
      setShowForm(false);
    }
  };

  return (
    <div className="add-todo">
      {!showForm ? (
        <button 
          onClick={() => setShowForm(true)}
          className="add-todo-btn"
        >
          + Add New Todo
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="add-todo-form">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter todo title..."
            className="add-todo-input"
            autoFocus
          />
          
          <div className="form-actions">
            <button type="submit" className="submit-btn">Add Todo</button>
            <button 
              type="button" 
              onClick={() => setShowForm(false)}
              className="cancel-btn"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddTodo;
