import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// compoents
import SearchGithub from "./SearchGithub";
import Header from "./common/Header";
import Footer from "./common/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" exact component={SearchGithub} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
