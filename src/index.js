import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//import './index css'
import { AuthProvider } from './context/AuthProvider'
// import { render } from 'react-dom'
// import { Router } from 'react-router-dom'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { router } from './routes'

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AuthProvider>
      {/* <Router {...router}> */}
      <App />
      {/* </Router> */}
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// import reportWebVitals from './reportWebVitals'
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
