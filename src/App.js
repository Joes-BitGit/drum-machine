import React from 'react';
import './App.css';

function Buttons(props) {
  const keyboard = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

  return (
    //  Story 3 
    //   classname drumpad
    //   unique id that describes the audio clip the drum will be set up to trigger
    //   inner text that displays the keys
    < div id="container" >
      {
        keyboard.map((btns) =>
          <button key={btns} className='drum-pad'>

            <span onClick={() => props.handlePlayback(btns)} id={btns}>{btns}</span>
          </button>
        )
      }
    </div >
  )
}

// only exporting the name App so need to use that name in brackets in index.js
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlayback = this.handlePlayback.bind(this);
  }

  handlePlayback(sound) {
    alert('audio');
  }

  render() {

    return (
      // Story 1
      <main id='drum-machine'>
        {/* Story 2 */}
        <div id="display">

        </div>
        <div id="drum-display">
          <Buttons handlePlayback={this.handlePlayback} />
        </div>

      </main>
    )
  }
}


