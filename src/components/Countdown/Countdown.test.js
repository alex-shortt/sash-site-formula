import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import Countdown from "./index"

it("renders correctly", () => {
  const tree = renderer.create(<Countdown />).toJSON()

  expect(tree).toMatchSnapshot()
})
