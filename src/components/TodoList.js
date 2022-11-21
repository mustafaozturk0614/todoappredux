import React from "react";
import { useSelector } from "react-redux";
import ButtonGroup from "./ButtonGroup";
import Table from "./Table";

function TodoList() {
  const active = useSelector((state) => state.todo.active);
  const notCompleted = useSelector((state) =>
    state.todo.todos.filter((todo) => !todo.completed)
  );

  const completed = useSelector((state) =>
    state.todo.todos.filter((todo) => todo.completed)
  );

  const todos = active === 0 ? completed : notCompleted;
  return (
    <div>
      <Table
        head={["Sıra No", "Yapılacklar", "Tarih", "Durum", "İşlemler"]}
        body={todos.map((data, index) => [
          data.id,
          data.title,
          data.date,
          data.completed.toString(),
          [<ButtonGroup todoId={data.id}></ButtonGroup>],
        ])}
      ></Table>
    </div>
  );
}

export default TodoList;
