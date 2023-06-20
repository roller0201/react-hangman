import React, { useState, useEffect } from 'react';
import style from './App.module.css';
import styled from 'styled-components';
import WordDisplay from './components/WordDisplay/WordDisplay';
import Controls from './components/Controls/Controls';
import Keyboard from './components/Keyboard/Keyboard';

// STYLED COMPONENTS
const Title = styled.h1`
  padding: 20px;
  font-size: 32px;
  text-align: center;
  display: flex;
`;

const App = () => {
  const [pressedKeys, setPressedKeys] = useState([]);
  const [gameStatus, setGameStatus] = useState(false);
  const [restart, setRestart] = useState(0);
  const [result, setResult] = useState(0);
  const [correctLetter, setCorrectLetter] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        setTime((prevTime) => prevTime + 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [isPaused]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };

  const updatePressedKeys = (key) => {
    if (!pressedKeys.includes(key)) {
      setPressedKeys([...pressedKeys, key]);
    }
  };

  const handleRestartGame = () => {
    setRestart(restart + 1);
    setPressedKeys([]);
    setShowSuccess(false);
    setCorrectLetter(null);
    setResult(0);
    setTime(0);
  };

  const handleStartGame = () => {
    setGameStatus(true);
    setShowSuccess(false);
    setPressedKeys([]);
    setResult(0);
    setCorrectLetter(null);
    setTime(0);
  };

  const handleStopGame = () => {
    setGameStatus(false);
    setIsPaused(true);
  };

  const handleReturnGame = () => {
    setIsPaused(false);
    setGameStatus(true);
  };

  return (
    <div className={style.app}>
      <Title>
        <h1>HANGMAN | WISIELEC </h1>
        {gameStatus && (
          <>
            <h1 style={{ right: '30vh', position: 'absolute' }}>CZAS</h1>
            <h1 style={{ right: '10vh', position: 'absolute' }}>
              {formatTime(time)}
            </h1>
          </>
        )}
      </Title>
      {gameStatus && (
        <WordDisplay
          pressedKeys={pressedKeys}
          restart={restart}
          setRestart={setRestart}
          correctLetter={correctLetter}
          setCorrectLetter={setCorrectLetter}
          result={result}
          setResult={setResult}
          showSuccess={showSuccess}
          setShowSuccess={setShowSuccess}
          setIsPaused={setIsPaused}
        />
      )}
      <Controls
        handleStopGame={handleStopGame}
        handleRestartGame={handleRestartGame}
        handleStartGame={handleStartGame}
        handleReturnGame={handleReturnGame}
        gameStatus={gameStatus}
        isPaused={isPaused}
      />
      <Keyboard setPressedKeys={updatePressedKeys} />
    </div>
  );
};

export default App;
