import React, { useRef, useState, useEffect } from 'react'
import AuthContext from '../context/AuthProvider'
import '../style/Login.css'
import { Link } from 'react-router-dom'

interface User {
  [key: string]: string
}

const Log_in: React.FC = () => {
  const userRef = useRef<HTMLInputElement>(null)
  const errorRef = useRef<HTMLParagraphElement>(null)
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    userRef.current?.focus()
  }, [])

  useEffect(() => {
    setErrorMessage('')
  }, [user, password])

  let users: User = {}

  function registerUser(user: string, password: string) {
    users[user] = password
    console.log(`${user} has been registered successfully`)
    setSuccess(true)
  }

  function login(user: string, password: string) {
    if (users[user] && users[user] === password) {
      console.log(`${user} login successfully`)
      setSuccess(true)
    } else {
      console.error('username or password is incorrect, try again')
    }
  }

  function handleSubmit(user: string, password: string) {
    if (Object.keys(users).length === 0) {
      registerUser(user, password)
    } else {
      login(user, password)
    }
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSubmit(user, password)
  }

  function logout(user: string) {
    delete users[user]
    console.log(`${user} has been removed from the system`)
  }

  return (
    <>
      <h1 className="blassTittle">WELCOME TO WORDLE GAME</h1>
      {success ? (
        <section className="form logged">
          <h1>Hey {user}, you are logged in!</h1>
          <br />
          <p>
            <Link to="/wordle-game">Let's playyy</Link>
          </p>
        </section>
      ) : (
        <section className="form">
          <p
            ref={errorRef}
            className={errorMessage ? 'errorMsg' : 'offScreen'}
            aria-live="assertive"
          >
            {errorMessage}
          </p>
          <h1 className="title">Sign In</h1>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="userName">UserName:</label>
            <input
              type="text"
              id="userName"
              className="input"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={password}
              required
            />
            <button className="input button">Sign In</button>
          </form>
          <p>
            Need an Account?
            <br />
            <span className="line">
              {/*TODO-- put router link here  */}
              <a href="#" onClick={logout}>
                Sign Up
              </a>
            </span>
          </p>
        </section>
      )}
    </>
  )
}
