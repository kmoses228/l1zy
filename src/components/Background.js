import React from "react";
import PropTypes from "prop-types";

import useImage from "use-image";
import l1zyBG from "../img/l1zy-transparent.png";

import { Image } from "react-konva";

const Background = ({ canvasDimensions }) => {
  const [image] = useImage(l1zyBG);

  return <Image image={image} />;
};

Background.propTypes = {
  canvasDimensions: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  })
};

export default Background;
