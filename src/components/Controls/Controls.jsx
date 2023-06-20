import React from 'react';
import style from './Controls.module.css';

const Controls = ({
  handleRestartGame,
  handleStartGame,
  handleStopGame,
  handleReturnGame,
  isPaused,
}) => {
  return (
    <div className={style.container}>
      <button onClick={() => handleStartGame()}>ROZPOCZNIJ GRE</button>
      <div>
        <button onClick={handleRestartGame}>RESTART</button>
        {isPaused ? (
          <button onClick={() => handleReturnGame()}>Wznów</button>
        ) : (
          <button onClick={() => handleStopGame(false)}>STOP</button>
        )}
      </div>
    </div>
  );
};

export default Controls;
