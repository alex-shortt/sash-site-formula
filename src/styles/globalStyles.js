import { createGlobalStyle } from "styled-components/macro"
import "normalize.css"

import "./fontawesome"

import SprayLetters from "assets/fonts/SprayLetters.otf"
import SprayLettersWoff from "assets/fonts/sprayletters-webfont.woff"
import SprayLettersWoff2 from "assets/fonts/sprayletters-webfont.woff2"

export default createGlobalStyle`
   @import url("https://use.typekit.net/oqq7apg.css");

  @font-face {
    font-family: "Spray";
     src: url(${SprayLettersWoff2}) format('woff2'),
         url(${SprayLettersWoff}) format('woff'),
         url(${SprayLetters}) format('otf');
  }
  
  body, html, #root {
    height: 100%;
  }

  body {
    font-family: Spray, Avenir, Lato, Roboto, sans-serif;
    overflow: auto;
    overflow-x: hidden;
  }
`
