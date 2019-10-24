import React from "react"
import styled from "styled-components/macro"

import epCoverArt from "assets/images/ep-cover-art.png"
import appleMusic from "assets/images/apple.png"
import spotify from "assets/images/spotify.png"

const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.p`
  font-size: 2rem;
  text-align: center;
  margin: 1rem 0;
`

const Cover = styled.img.attrs({ src: epCoverArt })`
  width: 50%;
  max-width: 300px;
  height: auto;
`

const Text = styled.p`
  font-size: 1em;
`

const Links = styled.div`
  display: flex;
`

const Link = styled.a`
  font-size: 0.9em;
  margin: 0 1em;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.15s linear;
  color: black !important;

  &:hover {
    opacity: 0.7;
  }
`

const Logo = styled.img`
  height: 2em;
  width: auto;
  vertical-align: middle;
`

function LinkGroup(props) {
  const { img, text, href } = props

  return (
    <Link href={href} target="_blank">
      <Logo src={img} />
      {text}
    </Link>
  )
}

export default function EP(props) {
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
