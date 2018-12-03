import { UPDATE_LICENSE } from "../actions/types";

export default function(state = "", action) {
  switch (action.type) {
    case UPDATE_LICENSE:
      return action.payload;
    default:
      return state;
  }
}
