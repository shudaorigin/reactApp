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
import { AppRegistry, Alert,Dimensions } from 'react-native';
import AppIntro from 'react-native-app-intro';
var SplashScreen = require('@remobile/react-native-splashscreen');
var PasswordGesture = require('react-native-gesture-password');

const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

class reactApp extends Component {
  onSkipBtnHandle = (index) => {
    Alert.alert('Skip');
    console.log(index);
  }
  doneBtnHandle = () => {
    Alert.alert('Done');
  }
  nextBtnHandle = (index) => {
    Alert.alert('Next');
    console.log(index);
  }
  onSlideChangeHandle = (index, total) => {
    console.log(index, total);
  }
  
  componentDidMount() {
        SplashScreen.hide();
  }
  
   onEnd(password) {
        if (password == '123') {
            this.setState({
                status: 'right',
                message: 'Password is right, success.'
            });

            // your codes to close this view
        } else {
            this.setState({
                status: 'wrong',
                message: 'Password is wrong, try again.'
            });
        }
    };
	
    onStart() {
        this.setState({
            status: 'normal',
            message: 'Please input your password.'
        });
    };
	
    onReset() {
        this.setState({
            status: 'normal',
            message: 'Please input your password (again).'
        });
    };
	  
	constructor(props) {
        super(props);
        this.state = {
            message: 'Please input your password.',
            status: 'normal'
        }
    };
  
  render() {
    const pageArray = [{
      title: 'Page 1',
      description: 'Description 1',
      img: require('./images/B.jpg'),
      imgStyle: {
        height: 80 * 2.5,
        width: 109 * 2.5,
      },
      backgroundColor: '#fa931d',
      fontColor: '#fff',
      level: 10,
    },
	{
      title: 'Page 1',
      description: 'Description 1',
      img: require('./images/B.jpg'),
      imgStyle: {
        height: 80 * 2.5,
        width: 109 * 2.5,
      },
      backgroundColor: '#fa931d',
      fontColor: '#fff',
      level: 10,
    }, {
      title: 'Page 2',
      description: 'Description 2',
      img: require('./images/B.png'),
      imgStyle: {
        height: 93 * 2.5,
        width: 103 * 2.5,
      },
      backgroundColor: '#a4b602',
      fontColor: '#fff',
      level: 10,
    }];
    return (
	/*
      <AppIntro
        onNextBtnClick={this.nextBtnHandle}
        onDoneBtnClick={this.doneBtnHandle}
        onSkipBtnClick={this.onSkipBtnHandle}
        onSlideChange={this.onSlideChangeHandle}
        pageArray={pageArray}
      />
	*/
	 <PasswordGesture
                ref='pg'
                status={this.state.status}
                message={this.state.message}
                onStart={() => this.onStart()}
                onEnd={(password) => this.onEnd(password)}
                />
    );
  }
}


AppRegistry.registerComponent('reactApp', () => reactApp);
