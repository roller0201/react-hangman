import { Component } from "react";
import style from "./Controls.module.css";

export default class Controls extends Component {
  state = {
    gameStatus: this.props.gameStatus,
  };

  setGameState = (event) => {
    this.props.pressedButton(event.target.textContent);
  };

  disableButton = () => {
    this.disabled = true;
  };

  setButtonState = status => {
    const start = document.getElementsByName("start");
    const restart = document.getElementsByName("restart");
    const stop = document.getElementsByName("stop");

    console.log({ start, restart, stop });
    /*
    when game is running:
     - Start Game disabled
     - Restart enabled
     - Stop Enabled    
    */

    //----------------------
    /*
    when game is not running:
     - Start Game enabled
     - Restart disabled
     - stop disabled
    */
  };

  render() {
    return (
      <div className={style.container}>
        <button onClick={this.setGameState} name="start">
          START GAME
        </button>
        <button onClick={this.setGameState} name="restart">
          RESTART
        </button>
        <button onClick={this.setGameState} name="stop">
          STOP
        </button>
      </div>
    );
  }
}
