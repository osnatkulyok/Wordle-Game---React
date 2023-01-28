/////////////////////////////
import "../style/index.css";
import { PopUp } from "./Pop_up";
import { useState } from "react";
// import { WelcomeUser } from './Welcome'

//TODO if success -setthe popup to true
//the click can justset it to true or false as a flag
//NOW we need to set it back or find another way exept condition. IN OTRDER to stand by its own.

function Layout({ onSelectRandomWord }) {
  const [popupVisible, setPopupVisible] = useState(false);

  const handlePopUp = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <div>
      <div className="App">
        <header className="AppHeader-module_appHeader__1Ehyv wordle-app-header">
          <div>
            <button id="wins">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                id="wins_collection"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"
                />
              </svg>
            </button>
          </div>
          <div className="AppHeader-module_title__6sqs-" id="wordleTitle">
            Wordle
          </div>
          <div className="AppHeader-module_menuRight__jUeYn">
            <button
              type="button"
              id="help-button"
              className="AppHeader-module_icon__x7b46 "
              aria-label="Help"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="28"
                viewBox="4 4 24 24"
                width="28"
                className="game-icon"
                data-testid="icon-help"
              >
                <path
                  fill="var(--color-tone-1)"
                  d="M14.8333 23H17.1666V20.6667H14.8333V23ZM15.9999 4.33334C9.55992 4.33334 4.33325 9.56001 4.33325 16C4.33325 22.44 9.55992 27.6667 15.9999 27.6667C22.4399 27.6667 27.6666 22.44 27.6666 16C27.6666 9.56001 22.4399 4.33334 15.9999 4.33334ZM15.9999 25.3333C10.8549 25.3333 6.66659 21.145 6.66659 16C6.66659 10.855 10.8549 6.66668 15.9999 6.66668C21.1449 6.66668 25.3333 10.855 25.3333 16C25.3333 21.145 21.1449 25.3333 15.9999 25.3333ZM15.9999 9.00001C13.4216 9.00001 11.3333 11.0883 11.3333 13.6667H13.6666C13.6666 12.3833 14.7166 11.3333 15.9999 11.3333C17.2833 11.3333 18.3333 12.3833 18.3333 13.6667C18.3333 16 14.8333 15.7083 14.8333 19.5H17.1666C17.1666 16.875 20.6666 16.5833 20.6666 13.6667C20.6666 11.0883 18.5783 9.00001 15.9999 9.00001Z"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              id="statistics-button"
              className="AppHeader-module_icon__x7b46 "
              onClick={onSelectRandomWord}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="4 4 28 28"
                width="32"
                className="game-icon"
                data-testid="icon-statistics"
              >
                <path
                  fill="var(--color-tone-1)"
                  d="M20.6666 14.8333V5.5H11.3333V12.5H4.33325V26.5H27.6666V14.8333H20.6666ZM13.6666 7.83333H18.3333V24.1667H13.6666V7.83333ZM6.66659 14.8333H11.3333V24.1667H6.66659V14.8333ZM25.3333 24.1667H20.6666V17.1667H25.3333V24.1667Z"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              id="settings-button"
              className="AppHeader-module_icon__x7b46 buttons"
              onClick={handlePopUp}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="28"
                viewBox="4 4 24 24"
                width="28"
                className="game-icon"
                data-testid="icon-settings"
              >
                <path
                  fill-rule="var(--color-tone-1)"
                  d="M25.52 17.2534C25.5733 16.8534 25.6 16.44 25.6 16C25.6 15.5734 25.5733 15.1467 25.5067 14.7467L28.2133 12.64C28.4533 12.4534 28.52 12.0934 28.3733 11.8267L25.8133 7.40004C25.6533 7.10671 25.32 7.01338 25.0267 7.10671L21.84 8.38671C21.1733 7.88004 20.4667 7.45338 19.68 7.13338L19.2 3.74671C19.1467 3.42671 18.88 3.20004 18.56 3.20004H13.44C13.12 3.20004 12.8666 3.42671 12.8133 3.74671L12.3333 7.13338C11.5467 7.45338 10.8267 7.89338 10.1733 8.38671L6.98665 7.10671C6.69332 7.00004 6.35998 7.10671 6.19998 7.40004L3.65332 11.8267C3.49332 12.1067 3.54665 12.4534 3.81332 12.64L6.51998 14.7467C6.45332 15.1467 6.39998 15.5867 6.39998 16C6.39998 16.4134 6.42665 16.8534 6.49332 17.2534L3.78665 19.36C3.54665 19.5467 3.47998 19.9067 3.62665 20.1734L6.18665 24.6C6.34665 24.8934 6.67998 24.9867 6.97332 24.8934L10.16 23.6134C10.8267 24.12 11.5333 24.5467 12.32 24.8667L12.8 28.2534C12.8667 28.5734 13.12 28.8 13.44 28.8H18.56C18.88 28.8 19.1467 28.5734 19.1867 28.2534L19.6667 24.8667C20.4533 24.5467 21.1733 24.12 21.8267 23.6134L25.0133 24.8934C25.3067 25 25.64 24.8934 25.8 24.6L28.36 20.1734C28.52 19.88 28.4533 19.5467 28.2 19.36L25.52 17.2534ZM16 20.8C13.36 20.8 11.2 18.64 11.2 16C11.2 13.36 13.36 11.2 16 11.2C18.64 11.2 20.8 13.36 20.8 16C20.8 18.64 18.64 20.8 16 20.8Z"
                ></path>
              </svg>
              {popupVisible ? (
                <button className="popupButton" onClick={handlePopUp}>
                  <PopUp />
                </button>
              ) : null}
            </button>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Layout;
