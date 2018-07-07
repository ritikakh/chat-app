import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import {handleSubmitUserData} from "../actions/username.action";
import SignInForm from "./sign-in-form";

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    handleSubmit: handleSubmitUserData
  }, dispatch);
};

const mapStateToProps = (state) => ({
  username: state.chat.username
});


export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);