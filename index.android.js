/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Register from './src/pages/Register';


export default class weather extends Component {

  constructor() {
    super()

    this.renderScene = this.renderScene.bind(this)
  }

  renderScene(route, navigator) {
    switch (route.name) {
      case 'loginPage':
        return <Login navigator={navigator} />;
      case 'registerPage':
        return <Register navigator={navigator} />
      default:
        return <Home navigator={navigator} />
    }
  }

  render() {
    return (
      <Navigator
          initialRoute={{name: 'homePage'}}
          renderScene={this.renderScene}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('weather', () => weather);
