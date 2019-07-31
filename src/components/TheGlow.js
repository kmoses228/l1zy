import React from "react";
import PropTypes from "prop-types";
import Konva from "konva";

import { Rect } from "react-konva";

const TheGlow = () => {
  console.log(Konva);
  return (
    <Rect
      x={475}
      y={720}
      width={750}
      height={60}
      fill="red"
      shadowColor="red"
      shadowBlur={100}
      filters={[Konva.Filters.Noise]}
      noise={1}
      shadowOpacity={1}
    />
  );
};

TheGlow.propTypes = {};

export default TheGlow;
