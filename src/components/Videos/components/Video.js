import React from "react"
import styled from "styled-components/macro"

import overlay1 from "assets/images/video-overlay-1.png"
import overlay2 from "assets/images/video-overlay-2.png"

const Container = styled.div`
  width: 70vw;
  height: 50vw;
  max-width: 300px;
  max-height: 180px;
  position: relative;

  @media screen and (max-width: 800px) {
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-image: url(${overlay1});
  background-size: cover;
  z-index: -1;
`

const IFrame = styled.iframe.attrs({
  frameBorder: 0,
  allow:
    "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
  allowFullscreen: true
})`
  width: 100%;
  height: 100%;
  mix-blend-mode: color-dodge;
`

export default function Video(props) {
  const { src, ...restProps } = props

  return (
    <Container {...restProps}>
      <IFrame src={src} />
      <Overlay />
    </Container>
  )
}
