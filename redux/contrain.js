'use strict';

import React, { Component } from 'react';
import { AppRegistry, Alert,Dimensions,View,Text,Button } from 'react-native';
import AppIntro from 'react-native-app-intro';
import {addTodo,toggleTodo} from './actions.js'
import {  connect } from 'react-redux'

class reactApp extends Component {

  
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
              <Button
			    title='Press Me!'
				style={{fontSize: 20, color: 'green'}}
				styleDisabled={{color: 'red'}}
				onPress={() => dispatch(addTodo('sdf'))}>
				
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