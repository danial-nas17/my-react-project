import React from "react";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { useState } from "react";

function UpdateTodo({ todo }) {
  const { updateTodo } = useContext(TodoContext);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await updateTodo(todo);
    setLoading(false);
  };

  return (
    <>
      {todo.completed ? (
        <i onClick={() => handleClick()} className="bi bi-check-all"></i>
      ) : (
        <i onClick={() => handleClick()} className="bi bi-check"></i>
      )}
      {loading && <span className="spinner-border spinner-border-sm"></span>}
    </>
  );
}

export default UpdateTodo;
