// Import necessary modules and components
import React from 'react'
import Layout from './src/components/Layout'
import { PopUp } from './src/components/Pop_up'
import { Log_in } from './src/components/Log_in'
import { createContext } from 'react'
import './style/App.css'

import Keyboard from './src/components/Keyboard'
// import { boardDefalt, generateWordSet } from './words'
import GameApp from './src/components/GameApp'

// Create context to access/transform props to information
// needed in different components in the project
export const AppContext = createContext<any>(null)

// App component
const App: React.FC = () => {
  return (
    <>
      <nav className="navbar">
        <Layout onSelectRandomWord={undefined} />
      </nav>

      <PopUp />

      <Log_in />
    </>
  )
}

export default App
