/**
 * sqlite.ios.callback.js
 *
 * Created by Andrzej Porebski on 10/29/15.
 * Copyright (c) 2015 Andrzej Porebski.
 *
 * Test App using JS Callbacks for react-naive-sqlite-storage
 *
 * This library is available under the terms of the MIT License (2008).
 * See http://opensource.org/licenses/alphabetical for full text.
 */
'use strict';

import React, { Component } from 'react';
import { AppRegistry, Alert,Dimensions,View,Text,Button } from 'react-native';

var SplashScreen = require('@remobile/react-native-splashscreen');

import { createStore , applyMiddleware} from 'redux'
import { Provider, connect } from 'react-redux'
import dataBases from './redux/reduces.js'

import App from './redux/contrain.js'

import thunk from 'redux-thunk'

let store = createStore(
  dataBases,
  applyMiddleware(thunk)
)

class reactApp extends Component {

  componentDidMount() {
        SplashScreen.hide();
  }

  render() {
	const { dispatch} = this.props
    return (
	  	<Provider store={store}>
			<App />
	    </Provider>
    )
  }
}

AppRegistry.registerComponent('reactApp', () => reactApp);
