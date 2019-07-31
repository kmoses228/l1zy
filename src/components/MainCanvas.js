import React, { Component } from "react";
import styled from "styled-components";

import { Stage, Layer } from "react-konva";
import Background from "./Background";
import TheGlow from "./TheGlow";

const CANVAS_VIRTUAL_WIDTH = 1704;
const CANVAS_VIRTUAL_HEIGHT = 1704;

const getViewportDimensions = () => {
  var width = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  var height = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  return {
    width,
    height
  };
};

class MainCanvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: getViewportDimensions()
    };

    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    this.resizeListener = window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener(this.resizeListener);
  }

  onResize() {
    this.setState({
      viewport: getViewportDimensions()
    });
  }

  render() {
    const { viewport } = this.state;
    const scale = Math.min(
      viewport.width / CANVAS_VIRTUAL_WIDTH,
      viewport.height / CANVAS_VIRTUAL_HEIGHT
    );

    return (
      <Stage
        width={Math.min(window.innerWidth, CANVAS_VIRTUAL_WIDTH)}
        height={viewport.height}
        scaleX={scale}
        scaleY={scale}
      >
        <Layer>
          <Background canvasDimensions={viewport} />
        </Layer>
        <Layer>
          <TheGlow />
        </Layer>
      </Stage>
    );
  }
}

export default MainCanvas;
