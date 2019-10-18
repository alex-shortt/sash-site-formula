import React from "react"
import styled from "styled-components/macro"

import Helmet from "components/Helmet"
import Background from "components/Background"
import Countdown from "components/Countdown"
import GrafittiBase from "components/Grafitti"
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
  color: white;
`

const Title = styled(GrafittiBase)`
  font-size: 2.5rem;
  text-align: center;
  margin-top: 2.5rem;

  @media screen and (max-width: 650px) {
    font-size: 1.5rem;
    margin-top: 1.5rem;
  }
`

const Links = styled(LinksBase)`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
`

export default function View(props) {
  return (
    <>
      <Helmet title="SASH" />
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
