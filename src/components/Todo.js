import React, { useState } from "react";
import TodoList from "./TodoList";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Todo({ todos, completeTodo, removeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return (
    <>
      {todos.map((todo, index) => (
        <div
          className={todo.isComplete ? "todo-row complete" : "todo-row"}
          key={index}
        >
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div className="icons">
            <RiCloseCircleLine
              className="delete-icon"
              onClick={() => removeTodo(todo.id)}
            />
            <TiEdit
              className="edit-icon"
              onClick={() => setEdit({ id: todo.id, text: todo.text })}
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default Todo;
