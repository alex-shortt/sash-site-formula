import React from "react"
import styled from "styled-components/macro"

import instagramLogo from "assets/images/instagram.png"
import twitterLogo from "assets/images/twitter.png"

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

const Link = styled.a`
  font-size: 1.5rem;
  color: black !important;
  text-decoration: none;
  transition: opacity 0.15s linear;

  &:hover {
    opacity: 0.7;
  }
`

const Logo = styled.img`
  height: 2.5rem;
  width: auto;
  vertical-align: middle;
`

function SocialLink(props) {
  const { img, text, href } = props

  return (
    <Link href={href} target="_blank">
      <Logo src={img} /> {text}
    </Link>
  )
}

export default function Contact(props) {
  return (
    <Container>
      <Title>Contact</Title>
      <SocialLink
        img={instagramLogo}
        text="sash"
        href="https:/instagram.com/sash"
      />
      <SocialLink
        img={twitterLogo}
        text="seeingsash"
        href="https:/twitter.com/seeingsash"
      />
    </Container>
  )
}
