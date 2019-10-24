import React from "react"
import styled from "styled-components/macro"

import Helmet from "components/Helmet"
import Background from "components/Background"
import Countdown from "components/Countdown"
import GraffitiBase from "components/Graffiti"
import LinksBase from "components/Links"

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled(GraffitiBase)`
  font-size: 2.5rem;
  text-align: center;
  margin-top: 2.5rem;

  @media screen and (max-width: 650px) {
    font-size: 1.7rem;
    margin-top: 1.7rem;
  }
`

const Links = styled(LinksBase)`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (max-width: 650px) {
    position: relative;
    bottom: inherit;
    left: inherit;
    transform: none;
    margin-top: 12vh;
  }
`

export default function Coming(props) {
  return (
    <>
      <Helmet title="Sash" />
      <Background />
      <Container>
        <Countdown />
        <Title>Not A Formula</Title>
        <br />
        <br />
        <br />
        <Links />
      </Container>
    </>
  )
}
