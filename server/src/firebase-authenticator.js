import * as firebase from 'firebase';
import React from 'react';
import PropTypes from 'prop-types';
import * as actions from './actions';
import {connect} from 'react-redux';

class FirebaseAuth extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const self = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        const ev = {type: actions.SIGN_IN_EVENT, user};
        self.props.dispatch(ev);
      } else {
        firebase.auth().signInWithRedirect(self.props.provider);
      }
    });
    return (
      <div></div>
     );
  } 
}

FirebaseAuth.propTypes = {
  dispatch: PropTypes.func.isRequired,
  provider: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
}

const FirebaseAuthenticator = connect(mapDispatchToProps)(FirebaseAuth);
export default FirebaseAuthenticator;
