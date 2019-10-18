import React from "react"
import styled from "styled-components/macro"

import Helmet from "components/Helmet"
import Background from "components/Background"
import Countdown from "components/Countdown"
import TextBase from "components/Grafitti"

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
  mix-blend-mode: color;
`

const Name = styled(TextBase)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 0;
  margin-top: 2rem;
`

export default function View(props) {
  return (
    <>
      <Helmet title="View" />
      <Background />
      <Container>
        <Countdown />
        <Name>SASH</Name>
      </Container>
    </>
  )
}
