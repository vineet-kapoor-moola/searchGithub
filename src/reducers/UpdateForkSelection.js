import { UPDATE_FORK_SELECTION } from "../actions/types";

export default function(state = "", action) {
  switch (action.type) {
    case UPDATE_FORK_SELECTION:
      return action.payload;
    default:
      return state;
  }
}
