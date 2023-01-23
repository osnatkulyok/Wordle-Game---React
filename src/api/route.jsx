// export default Pages;
import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import React from "react";
import { Log_in } from "../components/Log_in";
import GameApp from "../components/GameApp";

// This code is creating a browser router using the createBrowserRouter function from the "react-router-dom" library
// and importing the App, SignIn, Posts and Home components from different files.

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "sign-in",
    element: <Log_in />,
  },
  // This creates a route for the sign-in page at the path "/sign-in" and renders the <SignIn /> component

  {
    path: "wordle-game",
    element: <GameApp />,
  },
]);
