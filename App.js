import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'
import Account from './src/pages/Account';
import Home from './src/pages/Home';
import Signup from './src/pages/Signup';
import Login from './src/pages/Login';
import styles from './src/styles/baseStyles'
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey:"AIzaSyB-MErPTxEUfMsWcKh7U0ZhgnbOoGAwUcw",
  authDomain: "pick5-56b5a.firebaseapp.com",
  databaseURL: "https://pick5-56b5a.firebaseio.com",
  storageBucket:"pick5-56b5a.appspot.com",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class FirebaseAuth extends Component {
  
  constructor(props){

    super(props);

    this.state = {
      // the page is the screen we want to show the user, we will determine that
      // based on what user the firebase api returns to us.
      page: null
    };
  }

  componentWillMount(){

    // We must asynchronously get the auth state, if we use currentUser here, it'll be null

    const unsubscribe = firebaseApp.auth().onAuthStateChanged((user) => {

      // If the user is logged in take them to the accounts screen
      if (user != null) {
        this.setState({page: Home});
        return;
      }

      // otherwise have them login
      this.setState({page: Login});

      // unsubscribe this observer
      unsubscribe();

    });

  }

  render() {
    if (this.state.page) {
      return (
      // For now our navigator will always take us to the signup page.
      // We will use a transition where the new page will slide in from the right
      <Navigator
        initialRoute={{component: Login}}
        configureScene={() => {
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        renderScene={(route, navigator) => {
          if(route.component){
            // Pass the navigator the the component so it can navigate as well.
            // Pass firebaseApp so it can make calls to firebase.
            return React.createElement(route.component, { navigator, firebaseApp});
          }
      }} />
    );
  } else {
    return (

      // Our default loading view while waiting to hear back from firebase

      <View style={styles.container}>
        <View style={styles.body}>
          <ActivityIndicator size="large" />
        </View>
      </View>
    );
  }
  }
}

AppRegistry.registerComponent('FirebaseAuth', () => FirebaseAuth);