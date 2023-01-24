import React from "react";
import "../style/Winner.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Winner() {
  // use state hook to keep track of whether the pop-up should be displayed
  const [showWinPopUp, setShowWinPopUp] = useState(false);

  // // function to close the pop-up when the cancel button is clicked
  const handleHideClick = () => {
    setShowWinPopUp(false);
  };

  // // useEffect hook to set the state to show the pop-up after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWinPopUp(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  //TODO this gonna be a popup winner add
  //EXIT BUTTON, PLAY AGAIN BUTTON

  return (
    <section>
      {showWinPopUp && (
        <div className="winPopUp">
          <button className="cancelAdd" onClick={handleHideClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
              <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
              <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
            </svg>
          </button>
          {/* <Link className="playAgain" to="/">
            PLAY AGAIN
          </Link> */}
        </div>
      )}
    </section>
  );
}
