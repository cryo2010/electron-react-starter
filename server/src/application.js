import React from 'react';
import PropTypes from 'prop-types';
import * as firebase from 'firebase';
import FirebaseAuthenticator from './firebase-authenticator'
import Avatar from 'material-ui/Avatar';

export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.isSubscribed = false;
    this.onStoreEvent = this.onStoreEvent.bind(this);
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

  subscribeToStore() {
    if (!this.isSubscribed) {
      this.context.store.subscribe(this.onStoreEvent);
      this.isSubscribed = true;
    }
  }

  onStoreEvent() {
    const state = this.context.store.getState();
    if (state.user != this.state.user) {
      this.setState({user: state.user});
    }
  }

  render() {
    this.subscribeToStore();
    if (!this.state.user) {
      return (
        <div>
          <FirebaseAuthenticator provider={this.authProvider} />
        </div>
      );
    } else {
      return (
        <div>
          <Avatar src={this.state.user.photoURL} />
          {this.state.user.displayName}
        </div>
      );
    }
  }
}

Application.contextTypes = {
  store: PropTypes.object.isRequired
};


