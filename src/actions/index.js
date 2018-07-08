import { createAction } from "redux-actions";

import { USER_DATA, USER_MESSAGE } from "./types";


export const sendUserData = createAction(USER_DATA);
export const sendUserMessage = createAction(USER_MESSAGE);
