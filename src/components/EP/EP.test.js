import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import EP from "./index"

it("renders correctly", () => {
  const tree = renderer.create(<EP />).toJSON()

  expect(tree).toMatchSnapshot()
})
