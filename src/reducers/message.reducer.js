
import { handleActions } from "redux-actions";

import { USER_MESSAGE } from "../actions/types";

export default handleActions(
  {
    [USER_MESSAGE]: (state, {payload}) => {
      return [payload].concat(state)
    }
  },
  []
);
