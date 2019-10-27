import React from "react"
import styled from "styled-components/macro"

import instagramLogo from "assets/images/instagram.png"
import twitterLogo from "assets/images/twitter.png"
import mailLogo from "assets/images/mail.png"
import { Title, Container, Link } from "components/Common"

const Logo = styled.img`
  height: 2.5rem;
  width: auto;
  vertical-align: middle;
`

const At = styled(Link).attrs({ as: "span" })`
  font-family: fantasy;
  font-size: 1.9rem;
  line-height: 60%;
  align-self: flex-end;
  margin: 0;
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
