import React, { useContext } from "react";
import { AppContext } from "./GameApp";

function Key({ keyValue, bigKey }) {
  // Get the context object containing the onSelectLetter, onDelete, and onEnter functions
  const { onSelectLetter, onDelete, onEnter } = useContext(AppContext);
  // Function to handle when the key is clicked
  const selectLetter = () => {
    // Check if the key is the enter or delete key
    if (keyValue === "ENTER") {
      //  If it is, call the corresponding function from the context object
      onEnter();
    } else if (keyValue === "DELETE") {
      onDelete();
    } else {
      // Otherwise, call the onSelectLetter function with the keyValue as an argument
      onSelectLetter(keyValue);
    }
  };
  // Render the key component
  return (
    //  Add a class of "key" to the div, and an additional class of "big" if the bigKey prop is true
    <div className="key" id={bigKey && "big"} onClick={selectLetter}>
      {keyValue}
    </div>
  );
}

export default Key;
