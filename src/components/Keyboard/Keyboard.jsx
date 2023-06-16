import { Component } from "react";
import style from "./Keyboard.module.css";

const keyboard = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

export default class Keyboard extends Component {
  //! ARROW FUNCTIONS

  //! ---------------
  render() {
    return (
      <div className={style.container}>
        {
          //! Rendering keyboard
          keyboard.map((keys, i) => (
            <ul className={style.keyboard} key={i}>
              {keys.map((key, i) => (
                <li key={i}>
                  <button>{key}</button>
                </li>
              ))}
            </ul>
          ))
        }
      </div>
    );
  }
}
