import React from "react";
import Layout from "./components/Layout";
import { PopUp } from "./components/Pop_up";
import { Log_in } from "./components/Log_in";
import { createContext, useState, useEffect } from "react";
import "./style/App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefalt, generateWordSet } from "./words";
import GameApp from "./components/GameApp";
// import { Winner } from "./components/Winner";

//the way to give an access/transform the props to the information I want, to each component in the project that place inside that func.
export const AppContext = createContext();

export function App() {
  return (
    <>
      {/* <Winner /> */}
      <nav className="navbar">
        <Layout />
      </nav>
      <PopUp />
      <Log_in />
    </>
  );
}

// export default App;
