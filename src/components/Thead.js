import React from "react";

function Thead({ head }) {
  return (
    <thead>
      <tr>
        {head.map((data, index) => (
          <th className="text-center" key={index}>
            {data}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default Thead;
