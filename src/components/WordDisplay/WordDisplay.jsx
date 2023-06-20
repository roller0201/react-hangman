import React, { useState, useEffect } from 'react';
import style from './WordDisplay.module.css';

const words = [
  //{ category: ["Przysłowie"], value: ["chciwy dwa razy traci"] },
  {
    category: ['Przysłowie'],
    value: ['test'],
  },
  {
    category: ['Pojazdy'],
    value: ['Auto'],
  },
  {
    category: ['Przedmiot'],
    value: ['Komputer'],
  },
  {
    category: ['Zawód'],
    value: ['Programista'],
  },
];

const WordDisplay = ({
  restart,
  pressedKeys,
  showSuccess,
  setShowSuccess,
  correctLetter,
  setCorrectLetter,
  result,
  setResult,
  setIsPaused,
}) => {
  const [category, setCategory] = useState('');
  const [word, setWord] = useState('');
  const [hashWord, setHashWord] = useState('');

  useEffect(() => {
    randomCategory();
  }, [restart]);

  const randomCategory = () => {
    const myCategory = words[Math.floor(Math.random() * words.length)].category;
    setCategory(myCategory);
  };

  const randomWord = () => {
    const choosenCategory = category;
    const selectedWords = words.find(
      (w) => w.category === choosenCategory
    ).value;
    const selectedWord =
      selectedWords[Math.floor(Math.random() * selectedWords.length)];
    setWord(selectedWord);
    setHashWord(' _ '.repeat(selectedWord.length));
  };

  useEffect(() => {
    if (category) {
      randomWord();
    }
  }, [category]);

  useEffect(() => {
    // Sprawdzanie, czy któryś z elementów pressedKeys znajduje się w słowie
    const matchedIndexes = [];
    const lowercasePressedKeys = pressedKeys.map((key) => key.toLowerCase());
    const lowercaseWord = word.toLowerCase();

    for (let i = 0; i < lowercaseWord.length; i++) {
      if (lowercasePressedKeys.includes(lowercaseWord[i])) {
        matchedIndexes.push(i);
      }
    }

    // Tworzenie nowego hashowanego słowa na podstawie wyników dopasowania
    let newHashWord = '';
    for (let i = 0; i < word.length; i++) {
      if (matchedIndexes.includes(i)) {
        newHashWord += word[i];
      } else {
        newHashWord += ' _ ';
      }
    }

    setHashWord(newHashWord);

    // Sprawdzanie, czy wszystkie litery zostały odgadnięte
    if (newHashWord.toLowerCase() === lowercaseWord && newHashWord.length > 1) {
      setShowSuccess(true);
      setIsPaused(true);
    }
    if (pressedKeys.length > 0) {
      const lowercasePressedKey =
        pressedKeys[pressedKeys.length - 1].toLowerCase();
      setCorrectLetter(lowercaseWord.includes(lowercasePressedKey));
      if (lowercaseWord.includes(lowercasePressedKey) === false)
        setResult(result + 1);
    }
  }, [pressedKeys]);

  return (
    <>
      <div className={style.container}>
        {showSuccess && (
          <p style={{ color: 'green' }}>
            Brawo hasło zostało odgadnięte, naciśnij restart, aby rozpocząć nową
            gre.
          </p>
        )}
        {correctLetter === null ||
        showSuccess === true ? null : correctLetter !== true ? (
          <p style={{ color: 'red' }}>
            Podana litera nie znajduje się w wyrazie.
          </p>
        ) : (
          <p style={{ color: 'green' }}>
            Brawo, podana litera znajduje się w wyrazie.
          </p>
        )}
        <p className={style.main}>{hashWord}</p>
        <p>{category}</p>
      </div>
      <div
        style={{
          right: '40vh',
          top: '30%',
          bottom: 'translateY',
          position: 'absolute',
        }}
      >
        <h1>WYNIK</h1>

        <p>
          {result === 0 ? (
            <h2 style={{ textAlign: 'center' }}> 0</h2>
          ) : (
            <h2 style={{ textAlign: 'center' }}>{`-${result}`}</h2>
          )}
        </p>
      </div>
    </>
  );
};

export default WordDisplay;
