import React from "react"
import styled from "styled-components/macro"

import epCoverArt from "assets/images/ep-cover-art.png"
import appleMusic from "assets/images/apple.png"
import spotify from "assets/images/spotify.png"
import placeholderImg from "assets/images/ep-poster-placeholder.png"
import { Title, Text, Container, LinkGroup } from "components/Common"

const Cover = styled.img.attrs({ src: epCoverArt })`
  width: 50%;
  max-width: 200px;
  height: auto;
`

const Links = styled.div`
  display: flex;
`

const Placeholder = styled.img.attrs({ src: placeholderImg })`
  max-width: 90%;
  max-height: 90%;
  height: 100%;
  width: auto;
`

export default function EP(props) {
  return (
    <Container>
      <Placeholder src={placeholderImg} />
    </Container>
  )

  return (
    <Container>
      <Title>Not a Formula EP</Title>
      <Cover />
      <Text>Now Streaming on All Platforms</Text>
      <Links>
        <LinkGroup
          img={appleMusic}
          text="Apple Music"
          href="https://music.apple.com/us/artist/sash/569206310"
        />
        <LinkGroup
          img={spotify}
          text="Spotify"
          href="https://open.spotify.com/artist/6T2CimrgMFD4ww6OGVopDJ?si=ZJW8g8x0T4Wpxl5SNX6SWQ"
        />
      </Links>
    </Container>
  )
}
