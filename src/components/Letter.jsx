import React, { useContext, useEffect } from "react";
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

  let isSelected = false;

  if (
    letterPosition == currentAttempt.letterPosition &&
    attempValue == currentAttempt.attempt
  ) {
    isSelected = true;
  }
  // console.log(letter);
  return (
    <div className={isSelected ? "letter selected" : "letter"} id={letterState}>
      {letter}
    </div>
  );
}

export default Letter;
