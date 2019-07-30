import React, { Component } from "react";
import styled from "styled-components";
import MainCanvas from "./MainCanvas";

const MainContainer = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <MainContainer>
        <MainCanvas />
        <h1>New single</h1>
      </MainContainer>
    );
  }
}

export default App;
