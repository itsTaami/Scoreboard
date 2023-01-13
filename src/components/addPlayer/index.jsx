import React from "react";

const Add = (props) => {
  return (
    <div>
      <button onClick={() => props.add()}>Add+</button>
    </div>
  );
};

export default Add;
