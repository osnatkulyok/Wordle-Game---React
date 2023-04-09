import "../style/App.css";
import { Board } from "./Board";
import Keyboard from "./Keyboard";
import { createContext, useState } from "react";
import { boardDefalt, generateWordSet } from "./words";
import Layout from "./Layout";
import { Footer } from "./Footer";
import { Winner } from "./Winner";

//the way to give an access/transform the props to the information I want, to each component in the project that place inside that func.
export const AppContext = createContext();

// Function to handle button click

export function GameApp() {
  //setting a state to the board & keyBoard
  const [board, setBoard] = useState(boardDefalt);
  //useState will contain an obj because we keep follow 2 peaces of information.
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPosition: 0,
    // count correct letter in attempt.
    curAttemptWord: "",
  });
  // use state hook to keep track of whether the pop-up should be displayed
  const [showWinPopUp, setShowWinPopUp] = useState(false);
  // State to store the word set
  const [correctWord, setCorrectWord] = useState("RIGHT");
  // const [correctWord, setCorrectWord] = useState([]);
  // State to store the loading status
  const [, setLoading] = useState(false);
  function handleChooseWordButton() {
    console.log("hey apiiiii");
    // Set loading to true
    setLoading(true);

    // Fetch the word set
    generateWordSet().then((words) => {
      // Set the word set
      setCorrectWord(words.correctWord);

      // Set loading to false
      setLoading(false);
    });
  }

  const onSelectLetter = (keyValue) => {
    if (currentAttempt.letterPosition === 4) {
      console.log("DONE");
      const newBoard = [...board];
      newBoard[currentAttempt.attempt][currentAttempt.letterPosition] =
        keyValue;
      setBoard(newBoard);
      setCurrentAttempt({
        ...currentAttempt,
        letterPosition: currentAttempt.letterPosition + 1,
        curAttemptWord: currentAttempt.curAttemptWord + keyValue,
      });
    } else if (currentAttempt.letterPosition > 4) {
    } else {
      const newBoard = [...board];
      newBoard[currentAttempt.attempt][currentAttempt.letterPosition] =
        keyValue;
      setBoard(newBoard);
      setCurrentAttempt({
        ...currentAttempt,
        letterPosition: currentAttempt.letterPosition + 1,
        curAttemptWord: currentAttempt.curAttemptWord + keyValue,
      });
    }
  };

  const onDelete = () => {
    if (currentAttempt.letterPosition === 0) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = "";
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition - 1,
      //TODO delete the last
      curAttemptWord: currentAttempt.curAttemptWord.slice(0, -1),
    });
  };
  console.log(currentAttempt.curAttemptWord);

  //   alert('HEY BUDDY YOU HAVE REACHED A WORD')

  const onEnter = () => {
    if (currentAttempt.letterPosition !== 5) return;
    if (currentAttempt.curAttemptWord === correctWord) {
      console.log("winnnnnnn");
      setShowWinPopUp(!showWinPopUp);
      //TODO if win SHOW POP-UP
    }
    setCurrentAttempt({
      attempt: currentAttempt.attempt + 1,
      letterPosition: 0,
      curAttemptWord: "",
    });
  };

  //TODO IF ALL LETTERS ARE GREEN A SUCCSESFUL PAGE

  return (
    <div className="myApp">
      <nav className="navbar">
        <Layout handleChooseWordButton={handleChooseWordButton} />
      </nav>

      {/* the 'value' thing is using api context in order to provide an access to the info anywhere inside the AppContext */}
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currentAttempt,
          setCurrentAttempt,
          onSelectLetter,
          onDelete,
          onEnter,
          correctWord,
          handleChooseWordButton,
        }}
      >
        <div className="game">
          <Board />
          <Keyboard />
        </div>
        {showWinPopUp ? (
          <button
            onClick={() => {
              setShowWinPopUp(!showWinPopUp);
            }}
          >
            <Winner />
          </button>
        ) : null}

        {/* TODO FOOTER */}
      </AppContext.Provider>
      <Footer />
    </div>
  );
}

export default GameApp;
