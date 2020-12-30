import React from 'react';
import './App.css';

export class Display extends React.Component {
  render() {
    return (
      <div>Display ;D</div>
    )
  }
}

export class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyboard: ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
    }
    this.handlePlayback = this.handlePlayback.bind(this);

  }

  handlePlayback(sound) {
    // <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id={sound}></audio>
    console.log(sound);
  }

  render() {
    return (
      //  Story 3 
      //   classname drumpad
      //   unique id that describes the audio clip the drum will be set up to trigger
      //   inner text that displays the keys
      <div id="container" >
        {
          this.state.keyboard.map((btns) =>
            <button key={btns} className='drum-pad'>

              <span onClick={this.handlePlayback(btns)}>{btns}</span>
            </button>
          )
        }
      </div >
    )
  }
}

// only exporting the name App so need to use that name in brackets in index.js
export class App extends React.Component {

  render() {
    return (
      // Story 1: outer container for all other elements
      <main id='drum-machine'>
        {/* Story 2 */}
        <div id="drum-display">
          {/* user Input */}
          <Buttons />
        </div>
        <div id="display">
          {/* Display the data from the data collection based on user input*/}
          <Display />
        </div>
      </main>
    )
  }
}


