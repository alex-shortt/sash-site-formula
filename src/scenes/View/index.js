import React from "react"

import Helmet from "components/Helmet"
import { useTimeToLaunch } from "services/time"
import Coming from "scenes/Coming"
import Main from "scenes/Main"

export default function View(props) {
  const { asSeconds } = useTimeToLaunch()

  console.log(asSeconds)

  if (!asSeconds) {
    return <></>
  }

  if (asSeconds > 0) {
    return (
      <>
        <Helmet title="SASH" />
        <Coming />
      </>
    )
  }

  return (
    <>
      <Helmet title="SASH" />
      <Main />
    </>
  )
}
