import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import {handleSubmitUserData} from "../actions/username.action";
import SignInForm from "./sign-in-form";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleSubmit: handleSubmitUserData
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(SignInForm);