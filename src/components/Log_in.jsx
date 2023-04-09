import React from "react";
import { useRef, useState, useEffect } from "react";
import "../style/Login.css";
import { Link } from "react-router-dom";

export function Log_in() {
  // Destructure the setAuth function from the AuthContext
  // const { setAuth } = useContext(AuthContext)

  // Create a ref for the user input field
  const userRef = useRef();
  // Create a ref for the error message
  const errorRef = useRef();

  // Create state variables for the user, password, error message, and success status
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  // Use the useEffect hook to set focus on the user input field when the component mounts
  // useEffect(() => {
  //   userRef.current.focus()
  // }, [])

  // Use the useEffect hook to clear the error message when the user or password state variables change
  useEffect(() => {
    setErrorMessage("");
  }, [user, password]);

  let users = {};

  //will set a new user
  function registerUser(user, password) {
    users[user] = password;
    console.log(`${user} has been registered successfully`);
    // Set the success status to true
    setSuccess(true);
  }

  //will check any other try to log-in
  function login(user, password) {
    if (users[user] && users[user] === password) {
      console.log(`${user} login successfully`);
      // Set the success status to true
      setSuccess(true);
    } else {
      console.error("username or password is incorrect, try again");
    }
  }

  function handleSubmit(user, password) {
    if (Object.keys(users).length === 0) {
      registerUser(user, password);
    } else {
      login(user, password);
    }
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(user, password);
  };

  //sign-up from users
  function logout(user) {
    delete users[user];
    console.log(`${user} has been removed from the system`);
  }

  return (
    <>
      {/* TODO set a user name blassing */}
      <h1 className="blassTittle">WELCOME TO WORDLE GAME</h1>
      {success ? (
        <section className="form logged">
          <h1>Hey {user}, you are logged in!</h1>
          <br />
          <p>
            {/*TODO-- put wordle game link here  */}
            {/* go go gooo to App.js */}
            {/* set a useState argument in order to set it to move to another page */}
            <Link to="/wordle-game">Let's playyy</Link>
          </p>
        </section>
      ) : (
        <section className="form">
          {/* ment on a webpage should be read by a screen reader as soon as the
      content of the element changes. */}
          <p
            ref={errorRef}
            className={errorMessage ? "errorMsg" : "offScreen"}
            arria-live="assertive"
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
              <a href="#" onClick={logout}>
                Sign Up
              </a>
            </span>
          </p>
        </section>
      )}
    </>
  );
}
