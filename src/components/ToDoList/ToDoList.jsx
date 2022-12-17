import React from 'react';
import './ToDoList.css';

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className="ToDoList">
    {todos.map(({ id, text }) => (
      <li key={id} className="ToDoList__item">
        <p className="ToDoList__text">{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Удалить</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
