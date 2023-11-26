import React from "react";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { useState } from "react";

function RemoveTodo({ todoId }) {
  const [loading, setLoading] = useState(false);

  const { removeTodo } = useContext(TodoContext);

  const handleRemove = async () => {
    setLoading(true)
    await removeTodo(todoId);
  };

  return (
    <>
      <i onClick={() => handleRemove()} className="bi bi-trash-fill"></i>
      {loading && <span className="spinner-border spinner-border-sm"></span>}
    </>
  );
}

export default RemoveTodo;
