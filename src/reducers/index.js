import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import SearchResults from "./SearchResults";
import {
  SearchStatus,
  SearchStatusInitial,
  SearchErrorStatus
} from "./SearchStatus";
import UpdateLicenseSelection from "./UpdateLicenseSelection";
import UpdateForkSelection from "./UpdateForkSelection";

export default combineReducers({
  searchStatus: SearchStatus,
  repos: SearchResults,
  selectedLicense: UpdateLicenseSelection,
  showOnlyForkedRepos: UpdateForkSelection,
  form: formReducer
});
