import React, { Component } from "react";
import styled from "styled-components";

import MainCanvas from "./MainCanvas";
import FileInput from "./controls/FileInput";
import AudioPlayer from "./AudioPlayer";

const MainContainer = styled.div`
  text-align: center;
`;

const ControlsContainer = styled.div`
  text-align: center;
  position: absolute;
  top: 10px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioSrc: null,
      audioLevel: 0
    };
  }

  render() {
    const { audioSrc, audioLevel } = this.state;

    return (
      <MainContainer>
        <MainCanvas audioLevel={audioLevel} />
        <ControlsContainer>
          <AudioPlayer
            audioSrc={audioSrc}
            onAudioFrame={audioLevel => this.setState({ audioLevel })}
          />
          <br />
          <FileInput onUpload={audioSrc => this.setState({ audioSrc })} />
        </ControlsContainer>
      </MainContainer>
    );
  }
}

export default App;
