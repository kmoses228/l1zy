import React from "react";
import ReactDOM from "react-dom";

import { createGlobalStyle } from "styled-components";
import Milford from "./fonts/MILFCD_B.woff";

import App from "./components/App";

const GlobalStyle = createGlobalStyle`
body {
  @font-face {
    font-family: Milford;
    src: url('${Milford}') format('woff');
  }
  
  font-family: Milford;
  background: #000000;
  color: #ffffff;
}

h1 {
  text-transform: uppercase;
}
`;

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById("root")
);
