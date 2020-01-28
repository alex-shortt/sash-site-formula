import React from "react"
import styled from "styled-components/macro"

import { Title as TitleBase } from "components/Common"
import noiseImg from "assets/images/noise.png"

const Title = styled(TitleBase)`
  position: relative;
  background: rgba(255, 255, 255, 0.9);
  padding: 15px 25px;
  color: black;
  min-width: 250px;
  cursor: pointer;
  transition: transform 0.15s linear;
  transform-style: preserve-3d;
  transform-origin: 50% 0;
  border: none;
  background-image: url(${noiseImg});

  &:hover {
    transform: rotateX(14deg);
  }

  &:before {
    position: absolute;
    content: " ";
    width: 10px;
    height: 10px;
    top: 8%;
    left: 3%;
    border-radius: 50%;
    background: radial-gradient(hsla(256, 51%, 60%, 1), hsl(256, 51%, 30%));
  }

  &:after {
    position: absolute;
    content: " ";
    width: 10px;
    height: 10px;
    top: 8%;
    right: 3%;
    border-radius: 50%;
    background: radial-gradient(hsla(256, 51%, 60%, 1), hsl(256, 51%, 30%));
  }
`
export default function ShopButton(props) {
  return (
    <Title
      as="button"
      onClick={() => window.open("https://shopsash.myshopify.com")}
      {...props}
    >
      Visit Shop
    </Title>
  )
}
