import React from "react"

import { useTimeToLaunch } from "services/time"
import Coming from "scenes/Coming"
import Main from "scenes/Main"

export default function View(props) {
  const { asSeconds } = useTimeToLaunch()

  if (!asSeconds) {
    return <></>
  }

  return <Main />
}
