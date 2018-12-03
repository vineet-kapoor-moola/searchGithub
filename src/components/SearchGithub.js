import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import Loader from "react-loader-advanced"; // loader
// components
import Spinner from "./common/Spinner";
import SearchForm from "./SearchForm/SearchForm";
import SearchResults from "./SearchResults/SearchResults";

import * as actions from "../actions";

const SearchGithub = ({ handleFormSubmit, loading, history, location }) => {
  return (
    <Loader
      show={loading}
      message={<Spinner />}
      backgroundStyle={{ backgroundColor: "white", opacity: "0.3" }}
    >
      <SearchForm
        handleFormSubmit={handleFormSubmit}
        history={history}
        location={location}
      />
      <SearchResults />
    </Loader>
  );
};

function mapStateToProps({ searchStatus }) {
  return { loading: searchStatus.loading };
}
export default connect(
  mapStateToProps,
  actions
)(SearchGithub);
