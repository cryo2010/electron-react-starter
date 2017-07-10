import * as firebase from 'firebase';
import React from 'react';
import PropTypes from 'prop-types';
import * as actions from './actions';

export default class FirebaseAuthenticator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const self = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        const ev = {type: actions.SIGN_IN_EVENT, user};
        self.context.store.dispatch(ev);
      } else {
        firebase.auth().signInWithRedirect(self.props.provider);
      }
    });
    return (
      <div></div>
     );
  } 
}

FirebaseAuthenticator.propTypes = {
  provider: PropTypes.object.isRequired
};

FirebaseAuthenticator.contextTypes = {
  store: PropTypes.object.isRequired
};
