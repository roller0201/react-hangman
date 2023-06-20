import React from 'react';
import style from './Keyboard.module.css';

const keyboard = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
];

const Keyboard = ({ setPressedKeys }) => {
  return (
    <div className={style.container}>
      {keyboard.map((keys, i) => (
        <ul className={style.keyboard} key={i}>
          {keys.map((key, j) => (
            <li key={j}>
              <button onClick={() => setPressedKeys(key)}>{key}</button>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Keyboard;
