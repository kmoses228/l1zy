import React, { Component } from "react";
import PropTypes from "prop-types";

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.calculateFrame = this.calculateFrame.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.audioSrc !== this.props.audioSrc) {
      this.player.load();
      var context = new AudioContext();
      var src = context.createMediaElementSource(this.player);
      var analyser = context.createAnalyser();

      src.connect(analyser);
      analyser.connect(context.destination);

      analyser.fftSize = 256;

      var dataArray = new Uint8Array(1);

      this.calculateFrame(analyser, dataArray);
    }
  }

  calculateFrame(analyser, dataArray) {
    requestAnimationFrame(() => this.calculateFrame(analyser, dataArray));
    analyser.getByteFrequencyData(dataArray);
    this.props.onAudioFrame(dataArray[0]);
  }

  render() {
    const { audioSrc } = this.props;
    return (
      <audio
        ref={player => (this.player = player)}
        id="audio"
        controls={true}
        src={audioSrc}
      />
    );
  }
}

AudioPlayer.propTypes = {
  audioSrc: PropTypes.string
};

export default AudioPlayer;
