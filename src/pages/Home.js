import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  StatusBar,
  ListView,
  ActionButton,
  View
} from 'react-native';
import styles from '../styles/baseStyles';
import * as firebase from 'firebase';

export default class Home extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //     dataSource: new ListView.DataSource({
    //       rowHasChanged: (row1, row2) => row1 !== row2
    //     })
    //   };
    // }
    this.state = { over: 'Insert Pick - Over',  under: 'Insert Pick - Under',  favoriteSpread: 'Insert Pick - Favorite Spread',  underdogSpread: 'Insert Pick - Underdog Spread',  moneyLine: 'Insert Pick - Money Line' };
  }
  
  render(){
    return (
      <View style={styles.container}>
        <Text>Welcome to pick5!</Text>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({over})}
        value={this.state.over}
      />
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({under})}
        value={this.state.under}
        />
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({favoriteSpread})}
        value={this.state.favoriteSpread}
        />
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({underdogSpread})}
        value={this.state.underdogSpread}
        />
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({moneyLine})}
        value={this.state.moneyLine}
        />
      </View>
    );
    }

    
  _renderItem(item){
    return (
      <ListItem item="{item}" onpress={() => {}} />
    );
  }
    componentDidMount(){
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows([{ title: 'Pizza' }])
        })
      };
    //   <View style={styles.container}>
    //     <Text>Welcome to pick5!</Text>
    //     <TextInput
    //     style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    //     onChangeText={(text) => this.setState({over})}
    //     value={this.state.over}
    //   />
    //     <TextInput
    //     style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    //     onChangeText={(text) => this.setState({under})}
    //     value={this.state.under}
    //     />
    //     <TextInput
    //     style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    //     onChangeText={(text) => this.setState({favoriteSpread})}
    //     value={this.state.favoriteSpread}
    //     />
    //     <TextInput
    //     style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    //     onChangeText={(text) => this.setState({underdogSpread})}
    //     value={this.state.underdogSpread}
    //     />
    //     <TextInput
    //     style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    //     onChangeText={(text) => this.setState({moneyLine})}
    //     value={this.state.moneyLine}
    //     />
    //   </View>

}

AppRegistry.registerComponent('Home', () => Home);
