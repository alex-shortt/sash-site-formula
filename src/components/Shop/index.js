import React, { useState, useCallback } from "react"
import styled from "styled-components/macro"

import posterImage from "assets/images/signup-poster.png"
import { Title, Text, Container } from "components/Common"

const Input = styled.input.attrs({ type: "text" })`
  font-family: verveine, sans-serif;
  font-size: 1.5rem;
  border: none;
  flex: 1;
  box-sizing: content-box;
  background: transparent;
  border-bottom: 2px solid black;
  padding: 0.2rem 0.5rem;
  line-height: 0.7em;
  outline: none;
`

const Button = styled.button`
  background: transparent;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.15s linear;
  padding: 0.5rem 0.5rem;
  margin-left: 1rem;
  outline: none;

  &:hover {
    filter: brightness(1.2);
  }
`

const PosterWrapper = styled.div`
  position: relative;
`

const Poster = styled.img.attrs({ src: posterImage })`
  object-fit: contain;
  object-position: center top;
  width: 100%;
  max-width: 400px;
  height: auto;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: border-box;
`

const InputGroup = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 0 20px;
`

export default function Shop(props) {
  const [email, setEmail] = useState("")

  const submitEmail = useCallback(
    e => {
      e.preventDefault()
      const emailURL = `https://gmail.us20.list-manage.com/subscribe/post?u=46393c00e1880f303878c9fb9&id=06f0c72b8d&EMAIL=${encodeURIComponent(
        email
      )}`

      window.open(emailURL)
    },
    [email]
  )
  return (
    <Container>
      <Title>Shop Coming Soon</Title>
      <PosterWrapper>
        <Poster />
        <InputGroup onSubmit={submitEmail}>
          <Input onChange={e => setEmail(e.target.value)} value={email} />
          <Button action="submit">Submit</Button>
        </InputGroup>
      </PosterWrapper>
    </Container>
  )
}
