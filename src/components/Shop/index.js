import React, { useState, useCallback } from "react"
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

const Text = styled.p`
  font-size: 1em;
`

const InputGroup = styled.form`
  display: flex;
  justify-content: center;
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
`

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
      <Text>Enter your email below to get notified</Text>
      <InputGroup onSubmit={submitEmail}>
        <Input onChange={e => setEmail(e.target.value)} value={email} />
        <Button action="submit">Submit</Button>
      </InputGroup>
    </Container>
  )
}
