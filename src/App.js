import React from 'react';
import './App.css';

function Buttons(props) {
  const keyboard = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

  return (
    <div id="container">
      {keyboard.map((btns) =>
        <button key={btns}>
          <span>{btns}</span>
        </button>
      )}
    </div>
  )
}

// only exporting the name App so need to use that name in brackets in index.js
export class App extends React.Component {
  render() {

    return (
      // Story 1
      <main id='drum-machine'>
        {/* Story 2 */}
        <div id="display">
          {/* Story 3 */}
          <Buttons />
        </div>
      </main>
    )
  }
}


