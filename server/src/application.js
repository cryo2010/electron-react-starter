import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as firebase from 'firebase';
import FirebaseAuthenticator from './firebase-authenticator'
import Avatar from 'material-ui/Avatar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.initializeFirebase();
  }

  initializeFirebase() {
    console.debug('initializing firebase');
    const config = {
      apiKey: "AIzaSyDlEI13pwGnOav9YLGLAaZ2OZIwgzXcej0",
      authDomain: "node-electron-app-starter.firebaseapp.com",
      databaseURL: "https://node-electron-app-starter.firebaseio.com",
      projectId: "node-electron-app-starter",
      storageBucket: "",
      messagingSenderId: "1095319611096"
    };

    firebase.initializeApp(config);
    this.authProvider = new firebase.auth.GoogleAuthProvider();
    this.authProvider.addScope('profile');
  }

  render() {
    if (!this.props.user) {
      return (
        <div>
          <FirebaseAuthenticator provider={this.authProvider} />
        </div>
      );
    } else {
      return (
        <div>
          <Avatar src={this.props.user.photoURL} />
          {this.props.user.displayName}
        </div>
      );
    }
  }
}

App.propTypes = {
  user: PropTypes.object
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

const Application = connect(mapStateToProps)(App);
export default Application;
