// // import React from "react";
// // import { useRef, useState, useEffect, useContext } from "react";
// // import { Link } from "react-router-dom";
// // import AuthContext from "../context/AuthProvider";
// // import Board from "./Board";
// // import "../style/App.css";

// // export function Log_in() {
// //   //Board function
// //   const handleBoard = () => {
// //     return (
// //       <AppContext.Provider
// //         value={{
// //           board,
// //           setBoard,
// //           currentAttempt,
// //           setCurrentAttempt,
// //           onSelectLetter,
// //           onDelete,
// //           onEnter,
// //           correctWord,
// //         }}
// //       >
// //         <div className="game">
// //           <Board />
// //           <Keyboard />
// //         </div>
// //       </AppContext.Provider>
// //     );
// //   };

// //   // Destructure the setAuth function from the AuthContext
// //   const { setAuth } = useContext(AuthContext);

// //   // Create a ref for the user input field
// //   const userRef = useRef();
// //   // Create a ref for the error message
// //   const errorRef = useRef();

// //   // Create state variables for the user, password, error message, and success status
// //   const [user, setUser] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [errorMessage, setErrorMessage] = useState("");
// //   const [success, setSuccess] = useState(false);

// //   // Use the useEffect hook to set focus on the user input field when the component mounts
// //   useEffect(() => {
// //     userRef.current.focus();
// //   }, []);

// //   // Use the useEffect hook to clear the error message when the user or password state variables change
// //   useEffect(() => {
// //     setErrorMessage("");
// //   }, [user, password]);

// //   // Define a function to handle the form submission
// //   const handleSubmit = async (e) => {
// //     // Prevent the default form behavior
// //     e.preventDefault();
// //     try {
// //       // Make a post request to the login url with the user and password data

// //       // Set the success status to true
// //       setSuccess(true);
// //       console.log(success);
// //       // console.log(response);
// //       console.log(user, password);
// //     } catch (error) {
// //       // Check the error status and set the error message accordingly
// //       if (!error?.response) {
// //         setErrorMessage("NO SERVER RESPONSE");
// //       } else if (error.response?.status === 400) {
// //         setErrorMessage("MIISING USERNAME OR PASSWORD");
// //       } else if (error.response?.status === 401) {
// //         setErrorMessage("Unauthorized");
// //       } else {
// //         setErrorMessage("Login Failed");
// //       }
// //       // Focus on the error message
// //       errorRef.current.focus();
// //     }
// //     console.log(success);
// //     console.log(user, password);
// //   };

// //   return (
// //     <>
// //       {/* TODO set a user name blassing */}
// //       <h1 className="blassTittle">WELCOME TO WORDLE GAME</h1>
// //       {success ? (
// //         <section className="form logged">
// //           <h1>Hey {user}, you are logged in!</h1>
// //           <br />
// //           <br />
// //           <p>
// //             {/*TODO-- put wordle game link here  */}
// //             <button onClick={handleBoard}>Go to playyy</button>
// //           </p>
// //         </section>
// //       ) : (
// //         <section className="form">
// //           {/* ment on a webpage should be read by a screen reader as soon as the
// //       content of the element changes. */}
// //           <p
// //             ref={errorRef}
// //             className={errorMessage ? "errorMsg" : "offScreen"}
// //             arria-live="assertive"
// //           >
// //             {errorMessage}
// //           </p>
// //           <h1 className="title">Sign In</h1>
// //           <form onSubmit={handleSubmit}>
// //             <label htmlFor="userName">UserName:</label>
// //             <input
// //               type="text"
// //               id="userName"
// //               className="input"
// //               ref={userRef}
// //               autoComplete="off"
// //               onChange={(e) => setUser(e.target.value)}
// //               value={user}
// //               required
// //             />

// //             <label htmlFor="password">Password:</label>
// //             <input
// //               type="password"
// //               className="input"
// //               id="password"
// //               onChange={(e) => setPassword(e.target.value)}
// //               value={password}
// //               required
// //             />
// //             <button className="input button">Sign In</button>
// //           </form>
// //           <p>
// //             Need an Account?
// //             <br />
// //             <span className="line">
// //               {/*TODO-- put router link here to go to an exit page and reset those two setUser("");setPassword("");*/}
// //               <a href="#">Sign Up</a>
// //             </span>
// //           </p>
// //         </section>
// //       )}
// //     </>
// //   );
// // }

// import React from "react";
// import { useRef, useState, useEffect, useContext } from "react";
// import AuthContext from "../context/AuthProvider";
// import "../style/Login.css";

// export function Log_in() {
//   // Destructure the setAuth function from the AuthContext
//   const { setAuth } = useContext(AuthContext);

//   // Create a ref for the user input field
//   const userRef = useRef();
//   // Create a ref for the error message
//   const errorRef = useRef();

//   // Create state variables for the user, password, error message, and success status
//   const [user, setUser] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [success, setSuccess] = useState(false);

//   // Use the useEffect hook to set focus on the user input field when the component mounts
//   useEffect(() => {
//     userRef.current.focus();
//   }, []);

//   // Use the useEffect hook to clear the error message when the user or password state variables change
//   useEffect(() => {
//     setErrorMessage("");
//   }, [user, password]);

//   // Define a function to handle the form submission
//   const handleSubmit = async (e) => {
//     // Prevent the default form behavior
//     e.preventDefault();
//     try {
//       // Pass the user, password, roles, and access token to the setAuth function
//       // setAuth({ user, password, roles, accessToken });
//       // Clear the user and password state variables
//       // setUser("");
//       // setPassword("");
//       // Set the success status to true
//       setSuccess(true);
//       console.log(success);
//       // console.log(response);
//       console.log(user, password);
//     } catch (error) {
//       //   // Check the error status and set the error message accordingly
//       //   if (!error?.response) {
//       //     setErrorMessage("NO SERVER RESPONSE");
//       //   } else if (error.response?.status === 400) {
//       //     setErrorMessage("MIISING USERNAME OR PASSWORD");
//       //   } else if (error.response?.status === 401) {
//       //     setErrorMessage("Unauthorized");
//       //   } else {
//       //     setErrorMessage("Login Failed");
//       //   }
//       //   // Focus on the error message
//       errorRef.current.focus();
//     }
//     console.log(success);
//     console.log(user, password);
//   };

//   return (
//     <>
//       {/* TODO set a user name blassing */}
//       <h1 className="blassTittle">WELCOME TO WORDLE GAME</h1>
//       {success ? (
//         <section className="form logged">
//           <h1>Hey {user}, you are logged in!</h1>
//           <br />
//           <br />
//           <p>
//             {/*TODO-- put wordle game link here  */}
//             <a href="#">Go to playyy</a>
//           </p>
//         </section>
//       ) : (
//         <section className="form">
//           {/* ment on a webpage should be read by a screen reader as soon as the
//       content of the element changes. */}
//           <p
//             ref={errorRef}
//             className={errorMessage ? "errorMsg" : "offScreen"}
//             arria-live="assertive"
//           >
//             {errorMessage}
//           </p>
//           <h1 className="title">Sign In</h1>
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="userName">UserName:</label>
//             <input
//               type="text"
//               id="userName"
//               className="input"
//               ref={userRef}
//               autoComplete="off"
//               onChange={(e) => setUser(e.target.value)}
//               value={user}
//               required
//             />

//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               className="input"
//               id="password"
//               onChange={(e) => setPassword(e.target.value)}
//               value={password}
//               required
//             />
//             <button className="input button">Sign In</button>
//           </form>
//           <p>
//             Need an Account?
//             <br />
//             <span className="line">
//               {/*TODO-- put router link here  */}
//               <a href="#">Sign Up</a>
//             </span>
//           </p>
//         </section>
//       )}
//     </>
//   );
// }

// // Define an interface for the user details
// interface User {
//   name: string;
//   password: string;
// }

// // Create a state variable to store the user details
// let currentUser: User | null = null;

// // Define a function to set the user details
// function setUser(user: User) {
//   currentUser = user;
// }

// // Define a function to compare the current user details with new details
// function compareUser(user: User): boolean {
//   if (!currentUser) {
//     return false;
//   }
//   return (
//     currentUser.name === user.name && currentUser.password === user.password
//   );
// }

// // Define a function to handle the sign up process
// async function signUp(user: User): Promise<boolean> {
//   try {
//     // Make a request to the server to create the new user
//     // const response = await axios.post('/signup', user);
//     // Extract the user details from the response
//     // const newUser = response.data;
//     // Simulating the request
//     const newUser = user;
//     // Set the user details in the state
//     setUser(newUser);
//     return true;
//   } catch (error) {
//     console.error(error);
//     return false;
//   }
// }

// // if you have a log in form and you need seversl functions, one to keep the details of the user even when the game is render, one to compare if the new name and password are the same as the old you kept, and the last is sign up from the game. how would you do that in type script

// // write 3 funcs; the first will register a new user into an obj. the user and the password will bw the kwy-value. the second will treat any new log-in trying and will check if it match to the current user' else it will throw an error and will offer the user to try again. the last one will handle the sign-up and will remove the current uder fron the obj

import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import "../style/Login.css";
import GameApp from "../GameApp";

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
      console.log("login successfully");
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
            <a href="../GameApp.jsx">Go to playyy</a>
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
