import React, { useState, useEffect } from "react"
import styled from "styled-components/macro"
import moment from "moment"
import "moment-timezone"

import GrafittiBase from "components/Grafitti"

const Grafitti = styled(GrafittiBase)`
  font-size: 9rem;
  font-weight: 100;
  text-align: center;

  @media screen and (max-width: 650px) {
    font-size: 5rem;
  }
`

const localLaunchDate = moment
  .tz("2019-10-28 00:00", "America/New_York")
  .tz(moment.tz.guess())

export default function Countdown(props) {
  const [timeLeft, setTimeLeft] = useState()
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const diff = localLaunchDate.diff(moment())

    const duration = moment.duration(diff)
    const days = duration.days()
    const hours = duration.hours()
    const minutes = duration.minutes()
    const seconds = duration.seconds()

    let timeString
    if (days > 1) {
      timeString = `${days} days`
    } else {
      timeString = `${days} days, ${hours} hours, ${minutes} minutes,  ${seconds}`
    }

    setTimeLeft(timeString)

    setTimeout(() => setCounter(counter + 1), 1000)
  }, [counter])

  if (!timeLeft) {
    return <></>
  }

  return <Grafitti>{timeLeft}</Grafitti>
}
