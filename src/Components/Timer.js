import React from "react";

const Timer = props => {
  let minVal = Math.floor(props.timer / 60);
  let secVal = props.timer % 60;
  let minutes = minVal > 9 ? minVal : `0${minVal}`;
  let seconds = secVal > 9 ? secVal : `0${secVal}`;
  return (
    <div className="timer">
      {`${minutes}:${seconds}`}
      {!props.active ? (
        <i
          tabIndex={1}
          onClick={props.handlePlay}
          className="far fa-play-circle"
        />
      ) : (
        <i
          tabIndex={1}
          onClick={props.handlePause}
          className="far fa-pause-circle"
        />
      )}
    </div>
  );
};

export default Timer;
