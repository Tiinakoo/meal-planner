import React from "react";

import { mount } from "enzyme";
import Flex from "./Flex";

describe("Flex", () => {
  it("renders", () => {
    const component = mount(<Flex />);

    expect(component).toMatchSnapshot();
  });

  it("renders with alignRight", () => {
    const component = mount(<Flex alignRight />);

    expect(component).toMatchSnapshot();
  });
});
