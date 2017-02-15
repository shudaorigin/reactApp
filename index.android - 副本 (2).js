/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

var Dimensions = require('Dimensions');
import ModalDropdown from 'react-native-modal-dropdown';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';

var TwoSideMenus = require('./component/TwoSideMenus');


//import SideMenu from 'react-native-side-menu';
//const SideMenu = require('react-native-side-menu');
//const MenuItem = require('./component/Menu.js');

var screenW = Dimensions.get('window').width;
var screenH = Dimensions.get('window').height;

const TopNavigation = () => (
  <View style={{ padding: 10, flexDirection: 'row', backgroundColor: 'pink' }}>
    <View style={{ flex: 1 }}><Text>My App</Text></View>
    <Menu onSelect={(value) => alert(`User selected the number ${value}`)}>
      <MenuTrigger>
        <Text style={{ fontSize: 20 }}>12312312</Text>
      </MenuTrigger>
      <MenuOptions>
        <MenuOption value={1}>
          <Text>One</Text>
        </MenuOption>
        <MenuOption value={2}>
          <Text>Two</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  </View>
);

var BoxStyles = StyleSheet.create({
    "height50": {
        height : 50,
    },

    "height400": {
        height : screenH,
    },

    "width400" : {
        width : screenW,
    },

    "bgred" : {
        backgroundColor : "#6AC5AC",
    },

    "box" : {
        flexDirection : "column",
        flex: 1,
        position : "relative",
    },

    "centerView" : {
        flexDirection: "row",
        flex : 1,
        justifyContent : "space-between",
    },

    "label" : {
        top: 0,
        left: 0,
        paddingTop : 0,
        paddingRight: 3,
        paddingBottom : 3,
        position : "absolute",
        backgroundColor : "#FDC72F",
    },

    "top" : {
        justifyContent : "center",
        alignItems : "center",
    },

    "bottom" : {
        justifyContent: "center",
        alignItems : "center",
    },

    "right" : {
        justifyContent:"space-around",
        width : 50,
        alignItems : "center",
    },

    "left" : {
        justifyContent: "space-around",
        width: 50,
        alignItems: "center",
    },

    "margginBox" : {
        "position" : "absolute",
       // "top" : 100,
      //  "paddingLeft" : 7,
      //  "paddingRight" : 7,

    },
	dropdown_6_image: {
		width: 40,
		height: 40,
	},
})

var Box = React.createClass({
    render:function(){
        return(
        <View style = {[BoxStyles.box,BoxStyles[this.props.width],BoxStyles[this.props.height]]}>
          <Text>top</Text>
        </View>
    )
  }

})
var MargginBox = React.createClass({
    render : function(){
        return (
        <View style={[BoxStyles.margginBox]}>
            <Text>top</Text> 
        </View>
        )
    }

})

let dropdown_6_icon =  require('./images/flower.png');
class MenuSideItem extends Component {
  constructor(props) {
    super(props);
  }

  menuMightOpen() {
    console.log('left menu might open');
  }

  menuDidOpen() {
    console.log('left menu did open');
  }

  menuDidClose() {
    console.log('left menu did close');
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: this.props.color, height: 2000 }}/>
    );
  }
}
 
var reactApp = React.createClass({
	/*
  render: function() {
    return (
        <MargginBox></MargginBox>
    )}
	*/
		
	 componentDidMount() {
		this.refs.menu.moreLifeCycles(this.refs.leftMenu, this.refs.rightMenu);
	 	setTimeout(() => {
		  this.refs.menu.openMenu('left');
	 
		  setTimeout(() => {
			this.refs.menu.closeMenu();
		  }, 2000);
	 
		}, 2000);
	},
	 
	
    getInitialState(){
        // 初始化数据源(rowHasChanged是优化的一种手段，只有当r1 !== r2的时候才会重新渲染)
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return{
            // 给dataSource传递一组 数组
            dataSource: ds.cloneWithRows(['内容0', '内容1', '内容2'])
        }
    },
	 // 返回一个Item
    renderRow(rowData,sectionID,rowID) {
        return(
            // 实例化Item
            <View>
                <Text style={{backgroundColor:'red', height:44}}>内容{rowData},在第{sectionID}组第{rowID}行</Text>
            </View>
        )
    },
	
	render() {
		return (
		 <TwoSideMenus
			ref="menu"
			leftMenu={<MenuSideItem ref="leftMenu"  color="yellow" style={{borderWidth:1,borderColor:'red'}}/>}
			rightMenu={<MenuSideItem ref="rightMenu" color="red"/>}>
		
					  <View style={{
						flex: 1,
						flexDirection: 'column',
						justifyContent: 'space-between',
					  }}>
					  
					   <MenuContext style={{ flex: 1 }}>
							<TopNavigation/>
							<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'white' }}>
							   <Text>Hello!12333</Text>
							</View>
						   </MenuContext>
						   
						<View style={{height: 50,borderBottomWidth:1, backgroundColor: 'powderblue',alignItems: 'center',justifyContent: 'center'}} >	
						   
							<ModalDropdown defaultValue="菜单"  options={['option 1', 'option 2']}>
							  <Image style={BoxStyles.dropdown_6_image} source={dropdown_6_icon}	  />
						   </ModalDropdown>			  
			  
						</View>			  
						<ListView style={{backgroundColor:'white',flex:1}}             
							dataSource={this.state.dataSource}
							renderRow={this.renderRow}
						/>
							
						<View style={{ height: 50, backgroundColor: 'steelblue'}} />
					  </View>
		  </TwoSideMenus>
		);
	}
})


AppRegistry.registerComponent('reactApp', () => reactApp);
