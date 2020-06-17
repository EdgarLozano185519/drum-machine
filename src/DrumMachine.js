import React from 'react';
import DrumPad from './DrumPad';

class DrumMachine extends React.Component {
  constructor(props) {
    super(props)
    this.handleKey = this.handleKey.bind(this)
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKey);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKey);
  }
  playSound(letter) {
    const clip = document.querySelectorAll("#"+letter)[1]
    clip.play()
  }
  handleKey(e) {
    switch(e.keyCode) {
      case 81:
        this.playSound("Q")
        break;
      case 87:
        this.playSound("W")
        break;
      case 69:
        this.playSound("E")
        break;
      case 65:
        this.playSound("A")
        break;
      case 83:
        this.playSound("S")
        break;
      case 68:
        this.playSound("D")
        break;
      case 90:
        this.playSound("Z")
        break;
      case 88:
        this.playSound("X")
        break;
      case 67:
        this.playSound("C")
        break;
    }
  }
  render() {
    return (
      <div id="drum-machine" role="region" aria-label="DrumMachine">
        <h2>Welcome to My Simple Drum Machine</h2>
        <p>Welcome to this small and simple drum machine. This is a fun little app where you can press buttons and trigger drum sounds with keys. You can click on the drum elements below. Alternatively, pressing the corresponding key on the keyboard, such as Q, W, or any of the keys, and a sound is played. Have fun composing simple music.</p>
        <DrumPad text="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" />
        <DrumPad text="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" />
        <DrumPad text="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" />
        <DrumPad text="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" />
        <DrumPad text="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" />
        <DrumPad text="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" />
        <DrumPad text="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" />
        <DrumPad text="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" />
        <DrumPad text="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" />
      </div>
    )
  }
}

export default DrumMachine;
