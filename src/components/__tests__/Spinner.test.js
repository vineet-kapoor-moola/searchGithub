import React from "react";
import { mount } from "enzyme";
import Spinner from "../common/Spinner";

it("has a footer element", () => {
  let wrapped = mount(<Spinner />);
  expect(wrapped.find("div").length).toEqual(8);
  wrapped.unmount();
});
