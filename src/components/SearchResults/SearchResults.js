import React, { Component } from "react";
import { connect } from "react-redux";

import ResultCard from "./ResultCard";

// css
import "../../assets/css/searchResults.css";
import "../../assets/css/common.css";

class SearchResults extends Component {
  renderResultCards(list) {
    return list.map(
      ({ isForked, stars, name, id, license, url, owner, description }) => {
        return (
          <ResultCard
            isForked={isForked}
            stars={stars}
            name={name}
            license={license}
            url={url}
            owner={owner}
            description={description}
            key={id}
          />
        );
      }
    );
  }

  renderSearchContainer() {
    let { repos, searchStatus } = this.props;
    let { searchTiggeredAtLeastOnce, loading, error } = searchStatus;
    if (!searchTiggeredAtLeastOnce) {
      return <div>Please enter Query and click SEARCH button above.</div>;
    } else if (!loading && error) {
      return <div className="error">Oops, Try Again! </div>;
    } else if (!loading && !repos.length) {
      return <div>No Search results. Try a different query! </div>;
    }

    return (
      <div>
        <div className="search-results-heading">SEARCH Results</div>
        {this.renderResultCards(repos)}
      </div>
    );
  }
  render() {
    return (
      <div className="container search-results center">
        {this.renderSearchContainer()}
      </div>
    );
  }
}

function mapStateToProps({ repos, searchStatus }) {
  return { repos, searchStatus };
}

export default connect(mapStateToProps)(SearchResults);
