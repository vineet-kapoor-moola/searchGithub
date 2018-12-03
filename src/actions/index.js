import { queryObjToString } from "github-query-validator";

import {
  SEARCH_RESULTS,
  UPDATE_LICENSE,
  UPDATE_FORK_SELECTION,
  UPDATE_SEARCH_STATUS
} from "./types";

function parseResponse(repos) {
  return repos.map(
    ({
      fork,
      stargazers_count,
      html_url,
      name,
      license,
      owner,
      id,
      description
    }) => {
      return {
        isForked: fork,
        stars: stargazers_count,
        url: html_url,
        id,
        name,
        license,
        owner,
        description
      };
    }
  );
}

export const handleFormSubmit = (
  formValues,
  license,
  fork,
  history
) => dispatch => {
  let queryObject = {
    // cant add fork here because lib does not validate fork in the object
    stars: formValues.stars,
    addl: formValues.query
  };
  // create query string
  let queryString =
    queryObjToString(queryObject)
      .split(" ")
      .join("+") +
    (license ? `+license:${license}` : "") +
    `+fork:${fork ? "only" : "true"}`;
  // update query string
  history.push({
    pathName: "/",
    search: `q=${queryString}`
  });

  dispatch({
    type: UPDATE_SEARCH_STATUS,
    payload: {
      loading: true,
      error: false,
      searchTiggeredAtLeastOnce: true
    }
  });

  // service call
  fetch(`https://api.github.com/search/repositories?q=${queryString}`)
    .then(response => {
      // dispatch action to hide loader
      dispatch({
        type: UPDATE_SEARCH_STATUS,
        payload: {
          loading: false
        }
      });
      return response.json();
    })
    .then(responseData => {
      // dispatch action with parsed search results
      dispatch({
        type: SEARCH_RESULTS,
        payload: parseResponse(responseData.items)
      });
    })
    .catch(() => {
      // dispatch service error action
      dispatch({
        type: UPDATE_SEARCH_STATUS,
        payload: {
          error: true
        }
      });
    });
};

export const handleDropdownSelect = value => {
  return {
    type: UPDATE_LICENSE,
    payload: value
  };
};

export const handleForkCheckboxChange = value => {
  return {
    type: UPDATE_FORK_SELECTION,
    payload: value
  };
};
