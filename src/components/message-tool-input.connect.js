import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import {handleSendUserMessage, handleRobotMessage} from "../actions/usermessage.action";
import MessageToolInput from "./message-tool-input";

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    handleSubmit: handleSendUserMessage,
    sendAutomatedMessage: handleRobotMessage
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(MessageToolInput);