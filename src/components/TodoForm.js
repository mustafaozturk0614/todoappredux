import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setActive } from "../store/features/TodoSlice";

function TodoForm() {
  console.log("TodoForm");
  const [todo, setTodo] = useState({
    userId: 1,
    id: 1,
    title: "",
    completed: false,
    date: null,
  });

  const myId = useSelector((state) => state.todo.todos.length) + 1;

  const dispatch = useDispatch();

  const addMyTodo = () => {
    dispatch(addTodo(todo));

    setTodo({ ...todo, title: "" });
  };
  const oncahngeTodo = (e) => {
    const { name, value } = e.target;

    setTodo((t) => ({
      ...t,
      [name]: value,
      completed: false,
      id: myId,
    }));
    dispatch(setActive(1));
  };
  return (
    <form className="row flex-col mx-auto justify-center w-50 mt-5">
      <input
        value={todo.title}
        type="text"
        id="title"
        name="title"
        placeholder="Lütfen Bir Todo Giriniz"
        className="w-50 rounded-md border px-2 my-3 "
        onChange={oncahngeTodo}
      ></input>
      <input
        type="date"
        id="date"
        name="date"
        className="w-auto border rounded-md"
        onChange={oncahngeTodo}
      ></input>

      <button
        type="button"
        className="hover:bg-blue-800 w-50 m-auto mt-4 p-1 
  rounded font-medium cursor-pointer bg-blue-600 text-white"
        onClick={addMyTodo}
      >
        Todo ekle
      </button>
    </form>
  );
}

export default TodoForm;
