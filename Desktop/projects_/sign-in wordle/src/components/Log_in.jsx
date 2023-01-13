import React from 'react'
import { useRef, useState, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthProvider'

export function Log_in() {
  const { setAuth } = useContext(AuthContext)

  //to set the focus on that first input
  const userRef = useRef()
  //to set the focus on the error
  const errorRef = useRef()

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [success, setSuccess] = useState(false)

  //to set the focus on that first input
  useEffect(() => {
    userRef.current.focus()
  }, [])

  //to empty out any error we might have or in case the input wasn,t fullfilled
  useEffect(() => {
    setErrorMessage('')
  }, [user, password])

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(user, password)
    setUser('')
    setPassword('')
    setSuccess(true)
  }

  return (
    <>
      {/* TODO set a user name blassing */}
      <h1 className="blassTittle">WELCOME TO WORDLE GAME</h1>
      {success ? (
        <section className="form logged">
          <h1>You are logged in!</h1>
          <br />
          <br />
          <p>
            {/*TODO-- put wordle game link here  */}
            <a href="#">Go to playyy</a>
          </p>
        </section>
      ) : (
        <section className="form">
          {/* ment on a webpage should be read by a screen reader as soon as the
      content of the element changes. */}
          <p
            ref={errorRef}
            className={errorMessage ? 'errorMsg' : 'offScreen'}
            arria-live="assertive"
          >
            {errorMessage}
          </p>
          <h1 className="title">Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="userName">UserName:</label>
            <input
              type="text"
              id="userName"
              className="input"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="input"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
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
              <a href="#">Sign Up</a>
            </span>
          </p>
        </section>
      )}
    </>
  )
}
