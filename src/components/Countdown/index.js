import React from "react"
import styled from "styled-components/macro"

import GrafittiBase from "components/Graffiti"
import { useTimeToLaunch } from "services/time"

const Grafitti = styled(GrafittiBase)`
  font-size: 9rem;
  font-weight: 100;
  text-align: center;

  @media screen and (max-width: 650px) {
    font-size: 5rem;
  }
`

export default function Countdown(props) {
  const { timeDuration } = useTimeToLaunch()

  if (!timeDuration) {
    return <></>
  }

  const { days, hours, minutes, seconds } = timeDuration

  let timeString
  if (days > 1) {
    timeString = `${days} days`
  } else {
    timeString = `${hours} : ${minutes} : ${seconds}`
  }

  return <Grafitti>{timeString}</Grafitti>
}
