import React from "react"
import styled from "styled-components/macro"

import Helmet from "components/Helmet"
import Background from "components/Background"
import Contact from "components/Contact"
import EP from "components/EP"
import Videos from "components/Videos"
import Shop from "components/Shop"

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 800px) {
    height: auto;
    overflow-y: auto;
  }
`

const Row = styled.div`
  width: 100%;
  height: 50%;
  display: flex;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: auto;
    align-items: center;

    & > div {
      margin: 2rem 0;
      width: 100%;
    }
  }
`

export default function Main(props) {
  return (
    <>
      <Helmet title="Sash" />
      <Background />
      <Container>
        <Row>
          <EP />
          <Contact />
        </Row>
        <Row>
          <Videos />
          <Shop />
        </Row>
      </Container>
    </>
  )
}
