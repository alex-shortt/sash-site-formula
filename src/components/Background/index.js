import React from "react"
import styled from "styled-components/macro"

import purpleWall from "assets/images/purpleWall.png"

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${purpleWall});
  background-size: 60%;
  z-index: 1;
`

export default function Background(props) {
  return <Container />
}
