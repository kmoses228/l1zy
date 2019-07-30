import React, { Component } from "react";
import styled from "styled-components";

class MainCanvas extends Component {
  render() {
    const { className } = this.props;
    return <canvas className={className} />;
  }
}

export default styled(MainCanvas)`
  width: 100%;
  min-height: 500px;
`;
