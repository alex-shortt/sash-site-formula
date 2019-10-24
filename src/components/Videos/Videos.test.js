import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import Videos from "./index"

it("renders correctly", () => {
  const tree = renderer.create(<Videos />).toJSON()

  expect(tree).toMatchSnapshot()
})
