import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../store/features/TodoSlice";
function ButtonGroup({ todoId }) {
  const dispatch = useDispatch();

  const deleteMyTodo = () => {
    dispatch(deleteTodo(todoId));
  };
  const editMyTodo = () => {
    dispatch(editTodo(todoId));
  };

  return (
    <div>
      <button onClick={deleteMyTodo} className="btn btn-danger w-20 mx-1">
        Sil
      </button>

      <button onClick={editMyTodo} className="btn btn-warning w-20 ">
        Düzenle
      </button>
    </div>
  );
}

export default ButtonGroup;
