import React from "react";

const Controls = props => {
  return (
    <div className="controls">
      <span tabIndex={2} onMouseDown={props.decTimer}>
        -
      </span>
      <span tabIndex={3} onMouseDown={props.incTimer}>
        +
      </span>
      <span tabIndex={4} onClick={props.reset} id="reset">
        Reset
      </span>
    </div>
  );
};

export default Controls;
