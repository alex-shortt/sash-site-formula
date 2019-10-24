import React from "react"
import styled from "styled-components/macro"

import Helmet from "components/Helmet"
import Background from "components/Background"
import Contact from "components/Contact"
import EP from "components/EP"

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
`

const TopRow = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
`

export default function Main(props) {
  return (
    <>
      <Helmet title="Sash" />
      <Background />
      <Container>
        <TopRow>
          <EP />
          <Contact />
        </TopRow>
      </Container>
    </>
  )
}
