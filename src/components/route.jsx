// import React, { Component } from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { createContext, useState, useEffect } from "react";

// import { GameApp } from "../GameApp";

// class Pages extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div>
//           <Navigation>
//             <Switch>
//               <Route path="" component={GameApp} />
//             </Switch>
//           </Navigation>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

// export default Pages;
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import React from "react";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { createContext, useState, useEffect } from "react";
import { boardDefalt, generateWordSet } from "./words";
import Layout from "./components/Layout";
import { PopUp } from "./components/Pop_up";
import { Log_in } from "./components/Log_in";
import { GameApp } from "./GameApp";

// This code is creating a browser router using the createBrowserRouter function from the "react-router-dom" library
// and importing the App, SignIn, Posts and Home components from different files.

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      // This creates a route for the homepage at the path "/home" and renders the <Home /> component

      {
        path: "sign-in",
        element: <Log_in />,
      },
      // This creates a route for the sign-in page at the path "/sign-in" and renders the <SignIn /> component

      {
        path: "wordle-game",
        element: <GameApp />,
      },
      // This creates a route for the posts page at the path "/posts" and renders the <Posts /> component
    ],
  },
]);
