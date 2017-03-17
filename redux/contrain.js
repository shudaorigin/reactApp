'use strict';

import React, { Component } from 'react';
import { AppRegistry, Alert,Dimensions,View,Text,Button } from 'react-native';
import AppIntro from 'react-native-app-intro';
import {addTodo,toggleTodo,loadMoreWorkAsync} from './actions.js'
import {  connect } from 'react-redux'
import codePush from 'react-native-code-push'




class reactApp extends Component {

  checkupdate(){
	
	codePush.checkForUpdate()
		.then((update) => {
			if (!update) {
				Alert.alert('温馨提醒','当前为最新版本！');
			} else {
				Alert.alert('An update is available! Should we download it?','确定退出吗?');
			}
		});  
	
    }
 
  constructor(props) {
        super(props);
        this.state = {
            message: 'Please input your password.',
            status: 'normal'
        }
  };
  
  render() {
	const { dispatch} = this.props
    return (
			<View>
			  <Text>{this.props.todos.length}ok</Text>	
			  <Text>{this.props.todos.length}ok</Text>	
              <Button
			    title='检查最新版本'
				style={{fontSize: 20, color: 'green'}}
				styleDisabled={{color: 'red'}}
				onPress={() =>this.checkupdate()}>
				
			  </Button>		  
			</View>		   
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: payload => dispatch(addTodo(payload)),
    toggleTodo: id => dispatch(toggleTodo(id)),
  };
}

function select(state) {
	return {
		todos: state.todos,
	}
}

// 最终暴露 经 connect 处理后的组件
 export default connect(select)(reactApp);