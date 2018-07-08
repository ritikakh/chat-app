import { sendUserMessage } from "./index";

export const handleSendUserMessage = (message) => (dispatch, getState) => {
  const state = getState();
  const username = state.user.username;

  return dispatch(sendUserMessage({ username, message }));
};