import React from "react";
import PropTypes from "prop-types";
import Konva from "konva";

import { Rect } from "react-konva";

const BUFFER_SIZE = 5;
let buffer = new Uint8Array(BUFFER_SIZE);

const rootMeanSquare = values => {
  const squares = values.reduce((acc, val) => acc + Math.pow(val, 2), 0);
  return Math.sqrt(squares / values.length);
};

const TheGlow = ({ audioLevel }) => {
  const gatedValue = audioLevel >= 150 ? audioLevel : 0;
  buffer = Uint8Array.from([...buffer.slice(1, BUFFER_SIZE), gatedValue]);

  const r = rootMeanSquare(buffer);
  const color = `rgb(${r}, 0, 0)`;

  return (
    <Rect
      x={400}
      y={700}
      width={900}
      height={100}
      fill={color}
      shadowColor={color}
      shadowBlur={100}
      filters={[Konva.Filters.Noise]}
      noise={1}
      shadowOpacity={1}
    />
  );
};

TheGlow.propTypes = {};

export default TheGlow;
