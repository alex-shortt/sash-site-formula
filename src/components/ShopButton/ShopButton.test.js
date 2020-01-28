import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import ShopButton from "./index"

it("renders correctly", () => {
  const tree = renderer.create(<ShopButton />).toJSON()

  expect(tree).toMatchSnapshot()
})
