import React from "react"
import styled from "styled-components/macro"

export const Title = styled.p`
  font-size: 2rem;
  text-align: center;
  margin: 1rem 0;
`

export const Text = styled.p`
  font-size: 1rem;
`

export const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const Link = styled.a`
  font-size: 1.2rem;
  margin: 0 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.15s linear;
  color: black !important;

  &:hover {
    opacity: 0.7;
  }
`

const Logo = styled.img`
  height: 1rem;
  width: auto;
  vertical-align: middle;
`

export function LinkGroup(props) {
  const { img, text, href } = props

  return (
    <Link href={href} target="_blank">
      <Logo src={img} />
      {text}
    </Link>
  )
}
