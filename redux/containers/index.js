'use strict';
import React, { Component } from 'react';
import { StyleSheet, Alert,Dimensions,Text } from 'react-native';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as router } from 'react-native-router-redux';

//import * as reducers from '../reducers/index.js';

const reducer = combineReducers(router);
const store = createStore(reducer);

export default class AppContainer extends Component {
  render() {
    return (
      <Text>sss</Text>
    );
  }
}
