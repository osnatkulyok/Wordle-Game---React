import React, { useCallback, useEffect, useContext } from "react";
import Key from "./Key";
import { AppContext } from "./GameApp";

function Keyboard() {
  const { onSelectLetter, onDelete, onEnter } = useContext(AppContext);

  const key1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const key2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const key3 = ["Z", "X", "C", "V", "B", "N", "M"];

  //useCallback => is prevent 're', like re-updating our components or funcs.
  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter") {
      onEnter();
    } else if (event.key === "Backspace") {
      onDelete();
    } else {
      //  toLocaleLowerCase => the key1/2/3 array are capital letter so I'd tp find a way they will meet
      // don't have to defind alt or any other option because if it's not on the list, it will automaticly be ignored. ++ the up&lower base case.
      key1.forEach((key) => {
        if (event.key.toLocaleLowerCase() === key.toLocaleLowerCase()) {
          onSelectLetter(key);
        }
      });
      key2.forEach((key) => {
        if (event.key.toLocaleLowerCase() === key.toLocaleLowerCase()) {
          onSelectLetter(key);
        }
      });
      key3.forEach((key) => {
        if (event.key.toLocaleLowerCase() === key.toLocaleLowerCase()) {
          onSelectLetter(key);
        }
      });
    }
  });
  //the keyboard events in react language.
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div div className="line1">
        {key1.map((key) => {
          return <Key keyValue={key} />;
        })}
      </div>
      <div div className="line2">
        {key2.map((key) => {
          return <Key keyValue={key} />;
        })}
      </div>
      <div div className="line3">
        <Key keyValue={"ENTER"} bigKey />
        {key3.map((key) => {
          return <Key keyValue={key} />;
        })}
        <Key keyValue={"DELETE"} bigKey />
      </div>
    </div>
  );
}

export default Keyboard;
