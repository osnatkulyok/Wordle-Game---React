import './style/App.css'
import Board from './components/Board'
import Keyboard from './components/Keyboard'
import { createContext, useState, useEffect } from 'react'
import { boardDefalt, generateWordSet } from './words'
import Layout from './components/Layout'
// import 'core-js/fn/array/find'

//the way to give an access/transform the props to the information I want, to each component in the project that place inside that func.
export const AppContext = createContext()

function App() {
  //setting a state to the board & keyBoard
  const [board, setBoard] = useState(boardDefalt)
  //useState will contain an obj because we keep follow 2 peaces of information.
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPosition: 0,
  })
  const [wordSet, setWordSet] = useState(new Set())

  const correctWord = 'RIGHT'
  //will run one time only
  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet)
    })
  }, [])

  const onSelectLetter = (keyValue) => {
    if (currentAttempt.letterPosition === 4) {
      console.log('DONE')
      const newBoard = [...board]
      newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyValue
      setBoard(newBoard)
      setCurrentAttempt({
        ...currentAttempt,
        letterPosition: currentAttempt.letterPosition + 1,
      })
    } else if (currentAttempt.letterPosition > 4) {
      console.log('DONE')
    } else {
      const newBoard = [...board]
      newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyValue
      setBoard(newBoard)
      setCurrentAttempt({
        ...currentAttempt,
        letterPosition: currentAttempt.letterPosition + 1,
      })
    }
  }

  const onDelete = () => {
    if (currentAttempt.letterPosition === 0) return
    const newBoard = [...board]
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = ''
    setBoard(newBoard)
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition - 1,
    })
  }

  //   alert('HEY BUDDY YOU HAVE REACHED A WORD')

  const onEnter = () => {
    console.log(currentAttempt.letterPosition)
    if (currentAttempt.letterPosition !== 5) return

    // for (const word of wordSet) {
    //   console.log(word)
    // }

    // let currentWord = ''
    // for (let i = 0; i < 5; i++) {
    //   currentWord += board[currentAttempt.attempt][i]
    // }
    // if (wordSet.has(currentWord.toLowerCase())) {
    setCurrentAttempt({
      attempt: currentAttempt.attempt + 1,
      letterPosition: 0,
    })
    // } else {
    //   alert('Word not found')
    // }
  }

  return (
    <div className="myApp">
      <nav className="navbar">
        <Layout />
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
        }}
      >
        <div className="game">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  )
}

export default App
