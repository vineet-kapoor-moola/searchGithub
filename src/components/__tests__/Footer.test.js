import React from "react";
import { mount } from "enzyme";
import Footer from "../common/Footer";

let wrapped;
beforeEach(() => {
  wrapped = mount(<Footer />);
});

it("has a footer element", () => {
  expect(wrapped.find("footer").length).toEqual(1);
});

it("has 2 div element", () => {
  expect(wrapped.find("div").length).toEqual(2);
});
