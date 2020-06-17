import React from 'react';

class DrumPad extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    const clip = document.querySelectorAll("#"+this.props.text)[1]
    clip.currentTime = 0
    clip.play()
    clip.volume = 0.5
    document.getElementById("display").innerHTML = this.props.text
  }
  render() {
    return (
      <div onClick={this.handleClick} className="drum-pad" id={this.props.text} role="button">
        {this.props.text}
        <audio className="clip" id={this.props.text} src={this.props.src} />
      </div>
    )
  }
}

export default DrumPad;
