import React from "react";

import "./players.css";

const Player = (props) => {
  return (
    <div className="players">
      <h3>{props.name}</h3>
      <div>
        <button onClick={() => props.del(props.name)}>Remove</button>
      </div>
      <div className="score">
        <button onClick={() => props.increment(props.name)} className="btn">
          +
        </button>
        <p>{props.score}</p>
        <button onClick={() => props.decrease(props.name)} className="btn">
          -
        </button>
      </div>
    </div>
  );
};

export default Player;
