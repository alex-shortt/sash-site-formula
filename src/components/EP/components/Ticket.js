import React from "react"
import styled from "styled-components/macro"

import ticketImg from "assets/images/ep-ticket.png"

const Container = styled.div`
  height: 100%;
  width: auto;
  position: absolute;
  display: inline-block;
  transform: translateX(-50%) rotateX(1deg);
  transform-origin: top center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:before,
  &:after {
    content: "";
    position: absolute;
    margin: 4px;
    bottom: 0px;
    width: 40%;
    height: 10px;
    box-shadow: 0 2px 14px rgba(0, 0, 0, 0.4);
    z-index: -1;
    transition: all 0.3s ease-in-out;
  }

  &:after {
    right: 0px;
    transform: skew(5deg) rotate(5deg);
  }

  &:before {
    left: 0px;
    transform: skew(-5deg) rotate(-5deg);
  }

  &:hover {
    transform: translateX(-50%) rotateX(10deg);

    &:after,
    &:before {
      box-shadow: 0 5px 14px rgba(0, 0, 0, 0.9);
    }
  }
`

const Img = styled.img.attrs({ src: ticketImg })`
  height: 100%;
  width: auto;
`

const Contents = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
  box-sizing: border-box;
  padding-top: 8px;
  padding-bottom: 6px;
  overflow: hidden;
`

const Text = styled.p`
  font-family: verveine, sans-serif;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  margin: 0;
  font-size: 1.2em;
  vertical-align: middle;
  transform: rotate(180deg);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Icon = styled.img`
  width: auto;
  height: 1.1em;
  object-fit: contain;
  transform: rotate(90deg);
`

const Anchor = styled.a`
  color: black !important;
  text-decoration: none;
`

const InnerText = styled.span`
  @media screen and (max-width: 500px) {
    display: none;
  }
`

export default function Ticket(props) {
  const { text, left = "10%", icon, href } = props

  return (
    <Container style={{ left }}>
      <Anchor href={href}>
        <Img />
        <Contents>
          <Text>
            {icon && <Icon src={icon} />}
            <InnerText> {text}</InnerText>
          </Text>
        </Contents>
      </Anchor>
    </Container>
  )
}
