import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import LoginScreen from "./screens/login/index";
import SignupScreen from "./screens/signup/index";

export default class reactApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('reactApp', () => reactApp);
