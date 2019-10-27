import React from "react"
import styled from "styled-components/macro"

import { Title, Container } from "components/Common"

import VideoBase from "./components/Video"

const Video1 = styled(VideoBase)`
  position: absolute;
  top: 20%;
  left: 40%;
  transform: translateX(-50%) rotate(3deg);
`

const Video2 = styled(VideoBase)`
  position: absolute;
  bottom: 20%;
  right: 40%;
  transform: translateX(50%) rotate(-3deg);
`

export default function Videos(props) {
  return (
    <Container>
      <Video1 src="https://www.youtube.com/embed/7cLrN68DEHU" />
      <Video2 src="https://www.youtube.com/embed/IxGvm6btP1A" />
    </Container>
  )
}
