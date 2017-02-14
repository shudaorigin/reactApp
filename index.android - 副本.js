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
  View
} from 'react-native';


var Todo = require('./component/todo');

var Dimensions = require('Dimensions');
var screenW = Dimensions.get('window').width;

export default class reactApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! 第一个react native系统
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
		
		
		 <View style={styles.bottomInnerViewStyle}>
            <Text style={{color:'red'}}>111</Text>
            <Text style={{color:'red'}}>菜单</Text>
         </View>
		
		 <Todo></Todo>
		 
      </View>
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
  

    topViewStyle:{
        flexDirection:'row',
        marginTop:80,
        alignItems:'center',
        justifyContent:'space-around'
    },
    leftIconStyle:{
        width:70,
        height:70,
        borderRadius:35,
        borderWidth:3,
        borderColor:'rgba(0,0,0,0.2)',
    },
    conterViewStyle:{
        flexDirection:'row',
        width:screenW * 0.6,
    },
    bottomViewStyle:{
        flexDirection:'row',
        position:'absolute',
        bottom:0,
    },
    bottomInnerViewStyle:{
		
        width:(screenW)+1,
        height:40,
        backgroundColor:'rgba(255,255,255,0.4)',

        justifyContent:'center',
        alignItems:'center',

        borderWidth:1,
        borderRightColor:'white',
		borderLeftWidth:0,
    }
});

AppRegistry.registerComponent('reactApp', () => reactApp);
