import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import {handleSendUserMessage} from "../actions/usermessage.action";
import MessageToolInput from "./message-tool-input";

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    handleSubmit: handleSendUserMessage
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(MessageToolInput);