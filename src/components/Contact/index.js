import React from "react"
import styled from "styled-components/macro"

import instagramLogo from "assets/images/instagram.png"
import twitterLogo from "assets/images/twitter.png"
import mailLogo from "assets/images/mail.png"

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
  display: flex;
  justify-content: center;
  align-items: center;
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

const At = styled(Link).attrs({ as: "span" })`
  font-family: fantasy;
  font-size: 2.6rem;
  line-height: 60%;
  align-self: flex-end;
`

function SocialLink(props) {
  const { img, text: Text, href } = props

  return (
    <Link href={href} target="_blank">
      <Logo src={img} /> <Text />
    </Link>
  )
}

function InstagramText() {
  return (
    <>
      <At>@</At>sash
    </>
  )
}

function TwiterText() {
  return (
    <>
      <At>@</At>seeingsash
    </>
  )
}

function MailText() {
  return (
    <>
      get2sash<At>@</At>gmail.com
    </>
  )
}

export default function Contact(props) {
  return (
    <Container>
      <Title>Contact</Title>
      <SocialLink
        img={instagramLogo}
        text={InstagramText}
        href="https:/instagram.com/sash"
      />
      <SocialLink
        img={twitterLogo}
        text={TwiterText}
        href="https:/twitter.com/seeingsash"
      />
      <SocialLink
        img={mailLogo}
        text={MailText}
        href="mailto:get2sash@gmail.com"
      />
    </Container>
  )
}
