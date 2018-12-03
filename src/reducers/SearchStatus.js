import { UPDATE_SEARCH_STATUS } from "../actions/types";

let initialValue = {
  loading: false,
  error: false,
  searchTiggeredAtLeastOnce: false
};

export const SearchStatus = (state = initialValue, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_STATUS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
