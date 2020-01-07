import React from "react"
import styled from "styled-components/macro"

import appleMusic from "assets/images/apple.png"
import spotify from "assets/images/spotify.png"
import posterImg from "assets/images/dirt-poster.png"
import { Container } from "components/Common"

import Ticket from "./components/Ticket"

const Wrapper = styled.div`
  margin: 0 auto;
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    height: auto;
  }
`

const Tickets = styled.div`
  display: inline-block;
  position: relative;
  width: 90%;

  height: 20%;
  transform: translateY(-1.5vh);

  @media screen and (max-width: 800px) {
    max-height: 130px;
    height: 26vw;
    width: 80%;

    transform: translateY(calc(-8px - 0.5vw));
  }
`

const Poster = styled.img.attrs({ src: posterImg })`
  height: 70%;
  max-width: 100%;
  width: auto;

  @media screen and (max-width: 800px) {
    width: 90%;
    height: auto;
    max-width: 500px;
  }
`

export default function EP(props) {
  return (
    <Container>
      <Wrapper>
        <Poster />
        <Tickets>
          <Ticket
            left="20%"
            text="apple"
            icon={appleMusic}
            href="https://equitydistro.ffm.to/jk9vp4z"
          />
          <Ticket
            left="50%"
            text="spotify"
            icon={spotify}
            href="https://api.ffm.to/sl/e/ps/jk9vp4z?cd=eyJ1YSI6eyJ1YSI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE0XzYpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS83OC4wLjM5MDQuMTA4IFNhZmFyaS81MzcuMzYiLCJicm93c2VyIjp7Im5hbWUiOiJDaHJvbWUiLCJ2ZXJzaW9uIjoiNzguMC4zOTA0LjEwOCIsIm1ham9yIjoiNzgifSwiZW5naW5lIjp7Im5hbWUiOiJXZWJLaXQiLCJ2ZXJzaW9uIjoiNTM3LjM2In0sIm9zIjp7Im5hbWUiOiJNYWMgT1MiLCJ2ZXJzaW9uIjoiMTAuMTQuNiJ9LCJkZXZpY2UiOnt9LCJjcHUiOnt9fSwiY2xpZW50Ijp7InJpZCI6IjEwNjg5Yzc5LTQ5NjktNGEyNi04NmE2LTBlYmY1YTAzZWQ5OSIsInNpZCI6ImZiNDA4NTcwLTY4ZGEtNGE0MC1hMGZmLWVkMmE2MDdmNTRmMCIsImlwIjoiMTY5LjIzMS4xMjAuNDUiLCJyZWYiOiIiLCJob3N0IjoiZXF1aXR5ZGlzdHJvLmZmbS50byIsImxhbmciOiJlbi1VUyJ9LCJpc0Zyb21FVSI6ZmFsc2UsImNvdW50cnlDb2RlIjoiVVMiLCJpZCI6IjVlMGY3ZGY3MmUwMDAwNzY2OWVjNDM4NyIsInR6byI6MzAwLCJjaCI6bnVsbCwiYW4iOm51bGwsImRlc3RVcmwiOiJodHRwczovL2FjY291bnRzLnNwb3RpZnkuY29tL2VuL2F1dGhvcml6ZS8/Y2xpZW50X2lkPTY2ZDNjZGI0NDgwNzRhMGQ4OGU5YjA4YmFhZjJmM2Q3JnJlc3BvbnNlX3R5cGU9Y29kZSZyZWRpcmVjdF91cmk9aHR0cHMlM0ElMkYlMkZhcGkuZmZtLnRvJTJGd2ViaG9vayUyRnNwb3RpZnklMkZhdXRob3JpemUmc2NvcGU9dXNlci1yZWFkLXByaXZhdGUlMjB1c2VyLXJlYWQtYmlydGhkYXRlJTIwdXNlci1yZWFkLWVtYWlsJTIwdXNlci1saWJyYXJ5LW1vZGlmeSUyMHVzZXItbGlicmFyeS1yZWFkJTIwdXNlci1yZWFkLXJlY2VudGx5LXBsYXllZCUyMHVzZXItZm9sbG93LXJlYWQlMjB1c2VyLWZvbGxvdy1tb2RpZnklMjB1c2VyLXRvcC1yZWFkJTIwcGxheWxpc3QtbW9kaWZ5LXB1YmxpYyUyMHBsYXlsaXN0LXJlYWQtcHJpdmF0ZSUyMHBsYXlsaXN0LW1vZGlmeS1wcml2YXRlJnN0YXRlPWV5SmtZa3hwYm10SlpDSTZJalZsTUdZM1pHWTNNbVV3TURBd056WTJPV1ZqTkRNNE55SXNJbUZqZEdsdmJsUjVjR1VpT201MWJHd3NJblZ6WlhKRGIzVnVkSEo1SWpvaVZWTWlMQ0p6YUc5eWRFbGtJam9pYW1zNWRuQTBlaUlzSW5CeWIyUjFZM1FpT2lKemJXRnlkR3hwYm1zaUxDSnlaV1JwY21WamRGVnlhU0k2SW1oMGRIQnpPaTh2WlhGMWFYUjVaR2x6ZEhKdkxtWm1iUzUwYnk5cWF6bDJjRFI2TDNCeVpYTmhkbVZqWVd4c1ltRmpheUlzSW1aaGJHeGlZV05yVlhKc0lqcHVkV3hzTENKcGMxQnlaVkpsYkdWaGMyVWlPblJ5ZFdVc0ltbHpSblYwZFhKbFVtVnNaV0Z6WlNJNmRISjFaU3dpWVhKMGFYTjBTV1FpT2lJMVpEZ3pZbVk1TURJMk1EQXdNR1EzTXprek16QTJZallpTENKaFkzUnBiMjVKWkNJNmJuVnNiQ3dpYVhOR2NtOXRSVlVpT21aaGJITmxMQ0pzYVc1clZIbHdaU0k2Ym5Wc2JIMD0iLCJ2aWQiOiIxOWFmMTQ3Yy04YTRiLTQyOWItOTZiZC02NDVmN2M3MTM1Y2QiLCJzcnZjIjoic3BvdGlmeSIsInByb2R1Y3QiOiJzbWFydGxpbmsiLCJzaG9ydElkIjoiams5dnA0eiIsImlzQXV0aG9yaXphdGlvblJlcXVpcmVkIjp0cnVlLCJvd25lciI6IjVjZTQwY2MyMTMwMDAwZjg1ODA0MjIxNSIsImFyIjoiNWQ4M2JmOTAyNjAwMDBkNzM5MzMwNmI2In0="
          />
        </Tickets>
      </Wrapper>
    </Container>
  )
}
