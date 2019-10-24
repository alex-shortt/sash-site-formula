import React from "react"
import styled from "styled-components/macro"

const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.p`
  font-size: 2rem;
  text-align: center;
  margin: 1rem 0;
`

const Video = styled.iframe.attrs({
  frameBorder: 0,
  allow:
    "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
  allowFullscreen: true
})`
  width: 90%;
  max-width: 250px;
  height: 150px;
`

export default function Videos(props) {
  return (
    <Container>
      <Title>Videos</Title>
      <Video src="https://www.youtube.com/embed/7cLrN68DEHU" />
    </Container>
  )
}
