import React from "react";

import App from "../App";
import { shallow } from "enzyme";

import Header from "../common/Header";
import Footer from "../common/Footer";

// import { createStore } from "redux";
// import { Provider } from "react-redux";
let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});

it("App shows Header component", () => {
  expect(wrapped.find(Header).length).toEqual(1);
});

it("App shows Fotoer component", () => {
  expect(wrapped.find(Footer).length).toEqual(1);
});
