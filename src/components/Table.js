import React from "react";
import Tbody from "./Tbody";
import Thead from "./Thead";

function Table({ head, body, editTodo, delteTodo }) {
  console.log("Table");
  return (
    <div>
      <table className="table">
        <Thead head={head}></Thead>
        <Tbody body={body}></Tbody>
      </table>
    </div>
  );
}

export default Table;
