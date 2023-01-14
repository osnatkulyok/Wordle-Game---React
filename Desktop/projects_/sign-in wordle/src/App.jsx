import React from 'react'
import './App.css'
import { Layout } from './layoutStuff/Layout'
import { Log_in } from './components/Log_in'
import { PopUp } from './components/pop_up'

function App() {
  return (
    <section>
      <PopUp />
      <Layout />
      <Log_in />
    </section>
  )
}

export default App
