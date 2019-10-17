import { createGlobalStyle } from "styled-components/macro"
import "typeface-roboto"
import "normalize.css"

import "./fontawesome"

import SprayLetters from "assets/fonts/SprayLetters.otf"

export default createGlobalStyle`
  @font-face {
    font-family: "Spray";
    src: url(${SprayLetters});  
  }

  body {
    font-family: Spray, Avenir, Lato, Roboto, sans-serif;
    overflow: auto;
    overflow-x: hidden;
  }
`
