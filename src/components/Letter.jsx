import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./GameApp";

function Letter({ letterPosition, attempValue }) {
  const { board, correctWord, currentAttempt } = useContext(AppContext);
  const letter = board[attempValue][letterPosition];

  //kinds of typing
  const correct = correctWord[letterPosition] === letter;

  const almost = !correct && letter !== "" && correctWord.includes(letter);
  //where we gonna pass the id
  //the current thing condition is because we want to set the colors only if a word guessing is exist.
  const letterState =
    currentAttempt.attempt > attempValue &&
    (correct ? "correct" : almost ? "almost" : "error");

  //TODO why doesnt it work?????
  let isSelected = false;

  function handleFocusClick() {
    if (
      letterPosition == currentAttempt.letterPosition &&
      attempValue == currentAttempt.attempt
    ) {
      isSelected = true;
      console.log(isSelected);
    }
  }

  return (
    <div
      onClick={handleFocusClick}
      className={isSelected ? "letter selected" : "letter"}
      id={letterState}
    >
      {letter}
    </div>
  );
}

export default Letter;
