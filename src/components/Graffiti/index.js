import React from "react"
import styled from "styled-components/macro"

const Text = styled.p`
  color: hsl(0, 0%, 0%, 0.8);
  text-shadow: 0px 0px 10px hsl(57, 30%, 14%);
  mix-blend-mode: color;
  filter: contrast(1.3) brightness(2);
  font-family: ${props => `${props.font},`} Spray, sans-serif;
  margin: 0;
`

export default function Graffiti(props) {
  const { hue = 57, font, children, ...restProps } = props

  return (
    <Text font={font} {...restProps}>
      {children}
    </Text>
  )
}
