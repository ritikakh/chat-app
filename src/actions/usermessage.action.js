import { sendUserMessage } from "./index";

export const handleSendUserMessage = (message) => (dispatch, getState) => {
  const state = getState();
  const username = state.user.username;

  return dispatch(sendUserMessage({ username, message }));
};

export const handleRobotMessage = (message = "blacksms", username = "Robot") => (dispatch) => {
  return dispatch(sendUserMessage({ username, message }));
};