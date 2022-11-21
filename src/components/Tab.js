import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../store/features/TodoSlice";
function Tab({ children }) {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.todo.active);

  return (
    <div className=" container">
      <nav>
        {children.map((data, index) => {
          return (
            <button
              onClick={() => dispatch(setActive(index))}
              key={index}
              className={
                active === index ? "bg-green-800 p-2" : "bg-slate-400 p-2"
              }
            >
              {data.props.title}
            </button>
          );
        })}
      </nav>

      {children[active]}
    </div>
  );
}

export default Tab;
