import React from "react"
import styled from "styled-components/macro"

import appleMusic from "assets/images/apple.png"
import spotify from "assets/images/spotify.png"
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
`

const Tickets = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 20%;
  transform: translateY(-1.5vh);
`

const Poster = styled.img.attrs({ src: posterImg })`
  height: 70%;
  max-width: 100%;
  width: auto;
`

export default function EP(props) {
  return (
    <Container>
      <Wrapper>
        <Poster />
        <Tickets>
          <Ticket
            left="20%"
            text="apple"
            icon={appleMusic}
            href="https://music.apple.com/us/artist/sash/569206310"
          />
        </Tickets>
      </Wrapper>
    </Container>
  )
}
