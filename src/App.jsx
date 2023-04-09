import React from "react";
import Layout from "./components/Layout";
import { PopUp } from "./components/Pop_up";
import { Log_in } from "./components/Log_in";
import { createContext } from "react";
import "./style/App.css";
// import { Winner } from "./components/Winner";

//the way to give an access/transform the props to the information I want, to each component in the project that place inside that func.
export const AppContext = createContext();

export function App() {
  return (
    <>
      <nav className="navbar">
        <Layout />
      </nav>
      <PopUp />
      <Log_in />
    </>
  );
}
