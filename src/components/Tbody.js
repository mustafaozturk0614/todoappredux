import React from "react";

function Tbody({ body }) {
  return (
    <tbody>
      {body.map((data, index) => {
        return (
          <tr key={index}>
            {data.map((todo, key) => {
              return (
                <td className="text-center" key={key}>
                  {Array.isArray(todo) ? (
                    <div className="text-center">{todo}</div>
                  ) : (
                    todo
                  )}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
}

export default Tbody;
