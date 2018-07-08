
import { handleActions } from "redux-actions";

import { USER_DATA } from "../actions/types";

export default handleActions(
  {
    [USER_DATA]: (state, {payload: {username}}) => {
      return {
        ...state,
        username
      }
    }
  },
  {}
);
