import { Component } from "react";
import style from "./Controls.module.css";

export default class Controls extends Component {
  state = {
    gameStatus: this.props.gameStatus,
  };
  setGameState = (event) => {
    this.props.pressedButton(event.target.textContent);
  };

  render() {
    return (
      <div className={style.container} buttons={this.setButtonState}>
        <button onClick={this.setGameState}>START GAME</button>
        <button onClick={this.setGameState}>RESTART</button>
        <button onClick={this.setGameState}>STOP</button>
      </div>
    );
  }
}
