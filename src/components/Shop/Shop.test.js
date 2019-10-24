import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import Shop from "./index"

it("renders correctly", () => {
  const tree = renderer.create(<Shop />).toJSON()

  expect(tree).toMatchSnapshot()
})
