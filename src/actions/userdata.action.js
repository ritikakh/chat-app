import { sendUserData } from "./index";

export const handleSubmitUserData = (username) => (dispatch) => {
  return dispatch(sendUserData({ username }));
};