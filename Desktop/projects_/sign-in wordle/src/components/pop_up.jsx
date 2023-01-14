// // import React from 'react'
// // import { useState } from 'react'
// // import '../style/pop_up_style.css'

// // export function PopUp() {
// //   const [showPopUp, setShowPopUp] = useState(false)

// //   const handleClick = () => {
// //     setShowPopUp(!showPopUp)
// //   }
// //   const handleCancelClick = () => {
// //     setShowPopUp(false)
// //   }
// //   return (
// //     <section>
// //       <div className="box">
// //         <button className="cancel">
// //           <svg
// //             xmlns="http://www.w3.org/2000/svg"
// //             fill="currentColor"
// //             viewBox="0 0 16 16"
// //           >
// //             <path
// //               fill-rule="evenodd"
// //               d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM6.854 5.146a.5.5 0 1 0-.708.708L7.293 7 6.146 8.146a.5.5 0 1 0 .708.708L8 7.707l1.146 1.147a.5.5 0 1 0 .708-.708L8.707 7l1.147-1.146a.5.5 0 0 0-.708-.708L8 6.293 6.854 5.146z"
// //             />
// //           </svg>
// //         </button>
// //         <br />
// //         <h1>How To Play</h1>
// //         <p className="explain">Guess the Wordle in 6 tries.</p>

// //         <p className="checked">
// //           <svg
// //             xmlns="http://www.w3.org/2000/svg"
// //             fill="currentColor"
// //             viewBox="0 0 16 16"
// //           >
// //             <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
// //           </svg>
// //           Each guess must be a valid 5 letter word.
// //         </p>

// //         <p className="checked">
// //           <svg
// //             xmlns="http://www.w3.org/2000/svg"
// //             fill="currentColor"
// //             viewBox="0 0 16 16"
// //           >
// //             <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
// //           </svg>
// //           The color of tiles will change to show how closw your guess was to the
// //           word.
// //         </p>
// //         <div className="exampleBox">
// //           <h4>
// //             <strong>Examples</strong>
// //           </h4>
// //           <div className="wordBox">
// //             <div className="example correct white">W</div>
// //             <div className="example">E</div>
// //             <div className="example">A</div>
// //             <div className="example">R</div>
// //             <div className="example">Y</div>
// //             <br />
// //           </div>
// //           <p className="normal">
// //             <strong>W</strong> is in the word and in the correct spot.
// //           </p>

// //           <br />

// //           <div className="wordBox">
// //             <div className="example">V</div>
// //             <div className="example almost white">E</div>
// //             <div className="example">G</div>
// //             <div className="example">A</div>
// //             <div className="example">S</div>
// //           </div>

// //           <p className="normal">
// //             <strong>E</strong> is in the word but in the wrong spot.
// //           </p>
// //           <br />

// //           <div className="wordBox">
// //             <div className="example">R</div>
// //             <div className="example">I</div>
// //             <div className="example">G</div>
// //             <div className="example error white">H</div>
// //             <div className="example">T</div>
// //           </div>

// //           <p className="normal">
// //             <strong>H</strong> is not in the word in any spot.
// //           </p>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// import React, { useState } from 'react'
// import '../style/pop_up_style.css'

// export function PopUp() {
//   // use state hook to keep track of whether the pop-up should be displayed
//   const [showPopUp, setShowPopUp] = useState(true)

//   // function to toggle the pop-up when the button is clicked
//   const handleClick = () => {
//     setShowPopUp(!showPopUp)
//   }

//   // function to close the pop-up when the cancel button is clicked
//   const handleCancelClick = () => {
//     setShowPopUp(false)
//   }

//   return (
//     <section>
//       {/* only render the pop-up if showPopUp is true */}
//       {showPopUp && (
//         <div className="box">
//           {/* cancel button */}
//           <button className="cancel" onClick={handleCancelClick}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 16 16"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM6.854 5.146a.5.5 0 1 0-.708.708L7.293 7 6.146 8.146a.5.5 0 1 0 .708.708L8 7.707l1.146 1.147a.5.5 0 1 0 .708-.708L8.707 7l1.147-1.146a.5.5 0 0 0-.708-.708L8 6.293 6.854 5.146z"
//               />
//             </svg>
//           </button>
//           <br />
//           {/* title */}
//           <h1>How To Play</h1>
//           {/* instructions */}
//           <p className="explain">Guess the Wordle in 6 tries.</p>
//           <p className="checked">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 16 16"
//             >
//               <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
//             </svg>
//             The color of tiles will change to show how close your guess was to
//             the word.
//           </p>
//           {/* example */}
//           <div className="exampleBox">
//             <h4>
//               <strong>Examples</strong>
//             </h4>
//             <div className="wordBox">
//               <div className="example correct white">W</div>
//               <div className="example">E</div>
//               <div className="example">A</div>
//               <div className="example">R</div>
//               <div className="example">Y</div>
//               <br />
//             </div>
//             <p className="normal">
//               <strong>W</strong> is in the word and in the correct spot.
//             </p>

//             <br />

//             <div className="wordBox">
//               <div className="example">V</div>
//               <div className="example almost white">E</div>
//               <div className="example">G</div>
//               <div className="example">A</div>
//               <div className="example">R</div>
//               <br />
//             </div>
//             <p className="normal">
//               <strong>E</strong> is in the word but not in the correct spot.
//             </p>
//           </div>
//           <div>
//             <div className="wordBox">
//               <div className="example">R</div>
//               <div className="example">I</div>
//               <div className="example">G</div>
//               <div className="example error white">H</div>
//               <div className="example">T</div>
//             </div>
//             <p className="normal">
//               <strong>H</strong> is not in the word in any spot.
//             </p>
//           </div>
//         </div>
//       )}
//     </section>
//   )
// }
import React, { useState, useEffect } from 'react'
import '../style/pop_up_style.css'

export function PopUp() {
  // use state hook to keep track of whether the pop-up should be displayed
  const [showPopUp, setShowPopUp] = useState(false)

  // function to close the pop-up when the cancel button is clicked
  const handleCancelClick = () => {
    setShowPopUp(false)
  }

  // useEffect hook to set the state to show the pop-up after 1 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopUp(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section>
      {/* only render the pop-up if showPopUp is true */}
      {showPopUp && (
        <div className="box">
          {/* cancel button */}
          <button className="cancel" onClick={handleCancelClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM6.854 5.146a.5.5 0 1 0-.708.708L7.293 7 6.146 8.146a.5.5 0 1 0 .708.708L8 7.707l1.146 1.147a.5.5 0 1 0 .708-.708L8.707 7l1.147-1.146a.5.5 0 0 0-.708-.708L8 6.293 6.854 5.146z"
              />
            </svg>
          </button>
          <br />
          {/* title */}
          <h1>How To Play</h1>
          {/* instructions */}
          <p className="explain">Guess the Wordle in 6 tries.</p>
          <p className="checked">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
            </svg>
            Each guess must be a valid 5 letter word.
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
            </svg>
            The color of tiles will change to show how close
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; your guess was to the word.
          </p>
          {/* example */}
          <div className="exampleBox">
            <h4>
              <strong>Examples</strong>
            </h4>
            <div className="wordBox">
              <div className="example correct white">W</div>
              <div className="example">E</div>
              <div className="example">A</div>
              <div className="example">R</div>
              <div className="example">Y</div>
              <br />
            </div>
            <p className="normal">
              <strong>W</strong> is in the word and in the correct spot.
            </p>

            <br />

            <div className="wordBox">
              <div className="example">V</div>
              <div className="example almost white">E</div>
              <div className="example">G</div>
              <div className="example">A</div>
              <div className="example">R</div>
              <br />
            </div>
            <p className="normal">
              <strong>E</strong> is in the word but not in the correct spot.
            </p>
          </div>
          <div>
            <div className="wordBox">
              <div className="example">R</div>
              <div className="example">I</div>
              <div className="example error white">H</div>
              <div className="example">G</div>
              <div className="example">T</div>
            </div>
            <p className="normal">
              <strong>H</strong> is not in the word in any spot.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
