import React from "react";
// redux and helper libs
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {}, compose(applyMiddleware(reduxThunk)));

export default ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
