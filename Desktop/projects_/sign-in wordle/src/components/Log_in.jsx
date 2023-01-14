import React from 'react'
import { useRef, useState, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthProvider'

import axios from '../api/axios' // import axios library for making API calls
const LOGIN_URL = '/auth' // define the login endpoint

export function Log_in() {
  // Destructure the setAuth function from the AuthContext
  const { setAuth } = useContext(AuthContext)

  // Create a ref for the user input field
  const userRef = useRef()
  // Create a ref for the error message
  const errorRef = useRef()

  // Create state variables for the user, password, error message, and success status
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [success, setSuccess] = useState(false)

  // Use the useEffect hook to set focus on the user input field when the component mounts
  useEffect(() => {
    userRef.current.focus()
  }, [])

  // Use the useEffect hook to clear the error message when the user or password state variables change
  useEffect(() => {
    setErrorMessage('')
  }, [user, password])

  // Define a function to handle the form submission
  const handleSubmit = async (e) => {
    // Prevent the default form behavior
    e.preventDefault()

    try {
      // Make a post request to the login url with the user and password data
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, password }),
        {
          headers: { 'Content-Type': 'application/json' }, // set the headers for the request
          withCredentials: true, // include credentials in the request
        },
      )
      // Extract the access token and roles from the response data
      const accessToken = response?.data?.accessToken
      const roles = response?.data.roles
      // Pass the user, password, roles, and access token to the setAuth function
      setAuth({ user, password, roles, accessToken })
      // Clear the user and password state variables
      setUser('')
      setPassword('')
      // Set the success status to true
      setSuccess(true)
    } catch (error) {
      // Check the error status and set the error message accordingly
      if (!error?.response) {
        setErrorMessage('NO SERVER RESPONSE')
      } else if (error.response?.status === 400) {
        setErrorMessage('MIISING USERNAME OR PASSWORD')
      } else if (error.response?.status === 401) {
        setErrorMessage('Unauthorized')
      } else {
        setErrorMessage('Login Failed')
      }
      // Focus on the error message
      errorRef.current.focus()
    }
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
