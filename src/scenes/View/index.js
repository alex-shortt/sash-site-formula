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
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`

export default function View(props) {
  return (
    <>
      <Helmet title="View" />
      <Background />
      <Container>Sash Website</Container>
    </>
  )
}
