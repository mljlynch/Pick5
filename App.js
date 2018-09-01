import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'
import Signup from './src/pages/Signup';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey:"AIzaSyB-MErPTxEUfMsWcKh7U0ZhgnbOoGAwUcw",
  authDomain: "pick5-56b5a.firebaseapp.com",
  databaseURL: "https://pick5-56b5a.firebaseio.com",
  storageBucket:"pick5-56b5a.appspot.com"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class FirebaseAuth extends Component {
  render() {
    return (
      // For now our navigator will always take us to the signup page.
      // We will use a transition where the new page will slide in from the right.
      <Navigator
        initialRoute={{component: Signup}}
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
  }
}

AppRegistry.registerComponent('FirebaseAuth', () => FirebaseAuth);

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { over: 'Insert Pick - Over',  under: 'Insert Pick - Under',  favoriteSpread: 'Insert Pick - Favorite Spread',  underdogSpread: 'Insert Pick - Underdog Spread',  moneyLine: 'Insert Pick - Money Line' };
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Welcome to pick5!</Text>
//         <TextInput
//         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//         onChangeText={(text) => this.setState({over})}
//         value={this.state.over}
//       />
//         <TextInput
//         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//         onChangeText={(text) => this.setState({under})}
//         value={this.state.under}
//         />
//         <TextInput
//         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//         onChangeText={(text) => this.setState({favoriteSpread})}
//         value={this.state.favoriteSpread}
//         />
//         <TextInput
//         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//         onChangeText={(text) => this.setState({underdogSpread})}
//         value={this.state.underdogSpread}
//         />
//         <TextInput
//         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//         onChangeText={(text) => this.setState({moneyLine})}
//         value={this.state.moneyLine}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
