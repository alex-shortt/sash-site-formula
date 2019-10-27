import { useState, useEffect } from "react"
import moment from "moment"
import "moment-timezone"

const localLaunchDate = moment
  .tz("2019-10-28 24:00", "America/New_York")
  .tz(moment.tz.guess())

export function useTimeToLaunch() {
  const [duration, setDuration] = useState()
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const diff = localLaunchDate.diff(moment())
    const locDuration = moment.duration(diff)
    setDuration(locDuration)

    setTimeout(() => {
      setCounter(counter + 1)
    }, 300)
  }, [counter])

  if (!duration) {
    return {}
  }

  const days = duration.days()
  const hours = duration.hours()
  const minutes = duration.minutes()
  const seconds = duration.seconds()
  const timeDuration = { days, hours, minutes, seconds }

  const asSeconds = duration.asSeconds()

  return { duration, timeDuration, asSeconds }
}
