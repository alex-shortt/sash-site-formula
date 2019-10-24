import React from "react"
import styled from "styled-components/macro"

import Helmet from "components/Helmet"
import Background from "components/Background"

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
`

export default function Main(props) {
  return (
    <>
      <Helmet title="Sash" />
      <Background />
      <Container>
        <h1>hello</h1>
      </Container>
    </>
  )
}
