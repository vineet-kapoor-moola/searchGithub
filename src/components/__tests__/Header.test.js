import React from "react";
import { mount, unmount } from "enzyme";
import Header from "../common/Header";

let wrapped;
beforeEach(() => {
  wrapped = mount(<Header />);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a nav element", () => {
  expect(wrapped.find("nav").length).toEqual(1);
});

it("has a img element", () => {
  expect(wrapped.find("img").length).toEqual(1);
});
