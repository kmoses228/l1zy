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
      </MainContainer>
    );
  }
}

export default App;
