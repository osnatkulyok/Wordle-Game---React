import React from 'react'
import { useRef, useState, useEffect } from 'react'

export function Log_in() {
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
    useRef.current.focus()
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
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            {/*TODO-- put wordle game link here  */}
            <a href="#">Go to playyy</a>
          </p>
        </section>
      ) : (
        <section>
          {/* ment on a webpage should be read by a screen reader as soon as the
      content of the element changes. */}
          <p
            ref={errorRef}
            className={errorMessage ? 'errorMsg' : 'offScreen'}
            arria-live="assertive"
          >
            {errorMessage}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="userName">UserName</label>
            <input
              type="text"
              id="userName"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <button>Sign In</button>
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
