import React, { useCallback, useState } from 'react';
import './styles.css';
import sweep from './audio/mixkit-fast-small-sweep-transition-166.wav';
import arcade from './audio/mixkit-arcade-retro-game-over-213.wav';
import retro_game from './audio/mixkit-retro-game-notification-212.wav';
import martial_art from './audio/mixkit-martial-arts-fast-punch-2047.wav';
import gasp from './audio/mixkit-female-astonished-gasp-964.wav';
import bass from './audio/mixkit-short-bass-hit-2299.wav';
import vinyl from './audio/mixkit-vinyl-forward-and-back-fast-scratch-703.wav';
import tribal_drum from './audio/mixkit-hand-tribal-drum-562.wav';

const Drumpad = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
const timer = 'https://assets.coderrocketfuel.com/pomodoro-times-up.mp3';
const Sounds = {
  'Q': sweep,
  'W': timer,
  'E': arcade,
  'A': retro_game,
  'S': martial_art,
  'D': gasp,
  'Z': bass,
  'X': vinyl,
  'C': tribal_drum,
};

const Machine = () => {

  const playAudio = (btn) => {

    const audioE1 = document.getElementById(btn);
    console.log(audioE1);
    audioE1.play()

  }
  return (
    <div className="container">
      <div id="drum-machine">
        {/* Display needs to update when a sound plays */}
        <div id='display'>display</div>
        <div className="drum-pad-container">
          {Drumpad.map((dp_btn, idx) => {
            return (
              <>
                {/* button needs to have unique id of each sound */}
                {/* make the button keyboard pressable */}
                <button key={idx} onClick={() => playAudio(dp_btn)} className='drum-pad' id={Sounds[dp_btn]}>{dp_btn}<audio
                  src={Sounds[dp_btn]}
                  className='clip'
                  id={dp_btn}>
                  Your browser does not support the
                  <code>audio</code> element.
                </audio></button>

              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Machine
