import { Component } from "react";
import style from "./App.module.css";
import styled from "styled-components";
import WordDisplay from "./components/WordDisplay/WordDisplay";
import Controls from "./components/Controls/Controls";
import Keyboard from "./components/Keyboard/Keyboard";
// STYLED COMPONENTS
const Title = styled.h1`
  padding: 20px;
  font-size: 32px;
  text-align: center;
`;

// END OF STYLED COMPONENTS
export default class App extends Component {
  state = {
    words: [
      //{ category: ["Przysłowie"], value: ["chciwy dwa razy traci"] },
      {
        category: ["Kat1"],
        value: ["V1:1", "V1:2", "V1:3", "V1:4", "V1:5", "V1:6", "V1:7", "V1:8"],
      },
      {
        category: ["Kat2"],
        value: ["V2:1", "V2:2", "V2:3", "V2:4", "V2:5", "V2:6", "V2:7", "V2:8"],
      },
      {
        category: ["Kat3"],
        value: ["V3:1", "V3:2", "V3:3", "V3:4", "V3:5", "V3:6", "V3:7", "V3:8"],
      },
      {
        category: ["Kat4"],
        value: ["V4:1", "V4:2", "V4:3", "V4:4", "V4:5", "V4:6", "V4:7", "V4:8"],
      },
    ],
    pressedKeys: [],
  };

  render() {
    const { words } = this.state;
    return (
      <div className={style.app}>
        <Title>HANGMAN | WISIELEC</Title>
        <WordDisplay
          /* Tutaj przekazuje words --> */
          words={words}
        />
        <Controls />
        <Keyboard />
      </div>
    );
  }
}
