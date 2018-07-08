import { connect } from 'react-redux';

import MessageTool from "./message-tool";

const mapStateToProps = (state) => ({
  messages: state.message,
  username: state.user.username
});

export default connect(mapStateToProps, null)(MessageTool);