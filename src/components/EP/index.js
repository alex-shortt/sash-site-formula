import React from "react"
import styled from "styled-components/macro"

import appleMusic from "assets/images/apple.png"
import spotify from "assets/images/spotify.png"
import tidal from "assets/images/tidal.png"
import amazon from "assets/images/amazon.png"
import posterImg from "assets/images/ep-poster.png"
import { Container } from "components/Common"

import Ticket from "./components/Ticket"

const Wrapper = styled.div`
  margin: 0 auto;
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    height: auto;
  }
`

const Tickets = styled.div`
  display: inline-block;
  position: relative;
  width: 90%;

  height: 20%;
  transform: translateY(-1.5vh);

  @media screen and (max-width: 800px) {
    max-height: 130px;
    height: 26vw;
    width: 80%;

    transform: translateY(calc(-8px - 0.5vw));
  }
`

const Poster = styled.img.attrs({ src: posterImg })`
  height: 70%;
  max-width: 100%;
  width: auto;

  @media screen and (max-width: 800px) {
    width: 90%;
    height: auto;
    max-width: 500px;
  }
`

export default function EP(props) {
  return (
    <Container>
      <Wrapper>
        <Poster />
        <Tickets>
          <Ticket
            left="10%"
            text="apple"
            icon={appleMusic}
            href="https://music.apple.com/us/artist/sash/569206310"
          />
          <Ticket
            left="40%"
            text="spotify"
            icon={spotify}
            href="https://music.apple.com/us/artist/sash/569206310"
          />
          <Ticket
            left="65%"
            text="amazon"
            icon={amazon}
            href="https://music.apple.com/us/artist/sash/569206310"
          />
          <Ticket
            left="90%"
            text="tidal"
            icon={tidal}
            href="https://music.apple.com/us/artist/sash/569206310"
          />
        </Tickets>
      </Wrapper>
    </Container>
  )
}
