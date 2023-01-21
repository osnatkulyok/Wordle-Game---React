import React from "react";
import Layout from "./components/Layout";
import { PopUp } from "./components/Pop_up";
import { Log_in } from "./components/Log_in";
import { createContext, useState, useEffect } from "react";
import "./style/App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefalt, generateWordSet } from "./words";
import GameApp from "./GameApp";

function App() {
  return (
    <>
      <nav className="navbar">
        <Layout />
      </nav>
      <PopUp />
      <div>
        <Log_in />
      </div>
    </>
  );
}

export default App;
