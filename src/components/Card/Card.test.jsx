import React from "react";
import { shallow } from "enzyme";
import Card from ".";

const props = {
  handleClick: jest.fn(),
  id: 1,
  flipped: false,
  disabled: false,
  type: "type",
  height: 100,
  width: 100,
  solved: false
};
it("should render correctly", () => {
  const wrapper = shallow(<Card {...props} />);
  expect(wrapper).toMatchSnapshot();
});
