import { createAction } from "redux-actions";

import { USER_DATA } from "./types";

export const sendUserData = createAction(USER_DATA);
