import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

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
const Timer = props => {
  let minutes = Math.floor(props.timer / 60);
  let seconds = props.timer % 60;
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
class App extends Component {
  state = {
    time: 25,
    active: false,
    intervalID: ""
  };

  clock = this.state.time * 60;
  tick = () => {
    this.state.time > 0
      ? this.setState({
          time: this.state.time - 1
        })
      : null;
  };

  playButton = () => {
    this.setState({
      intervalID: setInterval(() => this.tick(), 1000),
      active: !this.state.active
    });
  };

  pauseButton = () => {
    clearInterval(this.state.intervalID);
    this.setState({
      active: !this.state.active
    });
  };
  reset = () => {
    clearInterval(this.state.interavlID);
    this.setState({
      time: 1500,
      active: false
    });
  };
  decTimer = () => {
    clearInterval(this.state.intervalID);
    this.state.time > 300
      ? this.setState({
          time: this.state.time - 60,
          active: false
        })
      : null;
  };
  incTimer = () => {
    clearInterval(this.state.intervalID);
    this.state.time < 3600
      ? this.setState({
          time: this.state.time + 60,
          active: false
        })
      : null;
  };

  /////////////////////////////////////////////////////////////////
  componentDidMount() {
    this.setState({
      time: this.state.time * 60
    });
  }

  render() {
    if (this.state.time == 0) {
      clearInterval(this.state.interavlID);
    }
    return (
      <div className="App">
        <header>
          <h1>Morpheus</h1>
          <h3>god of dreams</h3>
        </header>

        <Timer
          active={this.state.active}
          handlePlay={this.playButton}
          handlePause={this.pauseButton}
          icon={this.state.icon}
          timer={this.state.time}
        />
        <Controls
          reset={this.reset}
          decTimer={this.decTimer}
          incTimer={this.incTimer}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
