import React from "react"
import styled from "styled-components/macro"

import GraffitiBase from "components/Grafitti"

const Text = styled(GraffitiBase)`
  font-size: 1.5rem;
  text-align: center;

  @media screen and (max-width: 650px) {
    font-size: 1.3rem;
  }
`

const A = styled.a`
  margin: 0 1.5rem;
  text-decoration: none !important;

  @media screen and (max-width: 650px) {
    margin: 0 1.4rem;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  max-width: 650px;
  justify-content: space-between;
`

function Link(props) {
  const { to, children } = props

  return (
    <A href={to}>
      <Text>{children}</Text>
    </A>
  )
}

export default function Links(props) {
  return (
    <Container {...props}>
      <Link to="https://music.apple.com/us/artist/sash/569206310">
        Apple Music
      </Link>
      <Link to="https://open.spotify.com/artist/6T2CimrgMFD4ww6OGVopDJ?si=ZJW8g8x0T4Wpxl5SNX6SWQ">
        Spotify
      </Link>
      <Link to="https://www.youtube.com/watch?v=7cLrN68DEHU&feature=youtu.be">
        Smile Video
      </Link>
    </Container>
  )
}
