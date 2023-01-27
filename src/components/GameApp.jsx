import "../style/App.css";
import { Board } from "./Board";
import Keyboard from "./Keyboard";
import { createContext, useState, useEffect } from "react";
import { boardDefalt, generateWordSet } from "../words";
import Layout from "./Layout";
import { PopUp } from "./Pop_up";
import { Log_in } from "./Log_in";
import { Footer } from "./Footer";
import { Winner } from "./Winner";
// import 'core-js/fn/array/find'

//the way to give an access/transform the props to the information I want, to each component in the project that place inside that func.
export const AppContext = createContext();

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
  // const [wordSet, setWordSet] = useState(new Set());
  // use state hook to keep track of whether the pop-up should be displayed
  const [showWinPopUp, setShowWinPopUp] = useState(false);

  const [correctWord, setCorrectWord] = useState("RIGHT");

  // //will run one time only
  // useEffect(() => {
  //   generateWordSet().then((words) => {
  //     setWordSet(words.wordSet);
  //   });
  // }, []);
  const fetchRandomWord = async () => {
    try {
      const response = await fetch("http://localhost:3000/random-word");
      const data = await response.json();
      return data.word;
    } catch (err) {
      console.error(err);
    }
  };
  const onSelectRandomWord = async () => {
    const randomWord = await fetchRandomWord();
    setCorrectWord(randomWord);
    console.log("youve got this");
  };

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
      console.log(currentAttempt.curAttemptWord);
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
      // console.log(currentAttempt.curAttemptWord);
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
    // console.log(currentAttempt.letterPosition);
    if (currentAttempt.letterPosition !== 5) return;

    // for (const word of wordSet) {
    //   console.log(word)
    // }

    // let currentWord = ''
    // for (let i = 0; i < 5; i++) {
    //   currentWord += board[currentAttempt.attempt][i]
    // }
    // if (wordSet.has(currentWord.toLowerCase())) {
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

    // } else {
    //   alert('Word not found')
    // }
  };

  //TODO IF ALL LETTERS ARE GREEN A SUCCSESFUL PAGE

  return (
    <div className="myApp">
      <nav className="navbar">
        <Layout onSelectRandomWord={onSelectRandomWord} />
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
          onSelectRandomWord,
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
