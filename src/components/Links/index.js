import React from "react"
import styled from "styled-components/macro"

import GraffitiBase from "components/Grafitti"
import spotifyImg from "assets/images/spotify.png"
import appleImg from "assets/images/apple.png"
import youtubeImg from "assets/images/youtube.png"

const Text = styled(GraffitiBase)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  text-align: center;

  @media screen and (max-width: 650px) {
    font-size: 1.2rem;
  }
`

const A = styled.a`
  margin: 0 1.4rem;
  text-decoration: none !important;
  transition: opacity 0.15s linear;

  &:hover {
    opacity: 0.75;
  }

  @media screen and (max-width: 650px) {
    margin: 0.3rem 0;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  max-width: 650px;
  justify-content: space-between;

  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`

const Image = styled.img`
  width: 3rem;
  filter: drop-shadow(2px 3px 4px rgba(1, 1, 1, 0.4));
`

function Link(props) {
  const { to, children } = props

  return (
    <A href={to} target="_blank">
      <Text>{children}</Text>
    </A>
  )
}

export default function Links(props) {
  return (
    <Container {...props}>
      <Link to="https://music.apple.com/us/artist/sash/569206310">
        <Image src={appleImg} />
        Apple Music
      </Link>
      <Link to="https://open.spotify.com/artist/6T2CimrgMFD4ww6OGVopDJ?si=ZJW8g8x0T4Wpxl5SNX6SWQ">
        <Image src={spotifyImg} />
        Spotify
      </Link>
      <Link to="https://www.youtube.com/watch?v=7cLrN68DEHU&feature=youtu.be">
        <Image src={youtubeImg} />
        Smile Video
      </Link>
    </Container>
  )
}
