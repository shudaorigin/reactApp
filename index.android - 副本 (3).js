/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';
import React, { Component } from 'react';
import { Container, Header, CheckBox,List,Badge,
Radio,ListItem,Item, Button,Tabs,Tab, Title,Input,
Content, Footer, FooterTab,  Left, Right, Body, Icon ,
Switch,Fab,} from 'native-base';
import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text as svgText,
    Use,
    Defs,
    Stop
} from 'react-native-svg';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  TextInput ,
  View,
  navigator,
  Button as LButton,
  Alert,
  Image,
  Linking,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  Platform,
  BackAndroid,
  ToastAndroid,

} from 'react-native';
import LoginScreen from "./screens/login/index";

import Dialog from 'react-native-dialog';
import Swipeable from 'rn-swipeable/lib';

var SplashScreen = require('@remobile/react-native-splashscreen');
var firstTime = require('react-native-catch-first-time');
var DeviceInfo = require('react-native-device-info');
var HTMLView = require('react-native-htmlview');
import Swipeout from './component/Swipeout.js';
import DatePicker from 'react-native-datepicker';
import Swiper from 'react-native-swiper';
import ImagePro from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import Menu from './component/Menu.js';
import SideMenu from 'react-native-side-menu';
import TwoSideMenus from './component/TwoSideMenus.js';
import TextFit from './component/TextFit.js';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import Modal  from 'react-native-root-modal';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f7f7f7',
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
   dayCircleFiller: {
      backgroundColor: 'blue',
    },
	a: {
		fontWeight: '300',
		color: '#FF3366', // pink links
	  },
	   wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
const onButtonPress = () => {

};
 const onButtonPress2 = () => {
   /*
	Dialog.prompt("填写资料", null, [{
            text: '确定',
            onPress: (value) => {

            },
        }], undefined);
    */


 };
const menu = <Menu  navigator={navigator}/>;

export default class reactApp extends Component {

	constructor(props) {
        super(props);
        this.state = {
          date:"2016-05-15",
          visible: true};
    };
	componentDidMount() {
        SplashScreen.hide();
    };
   componentWillMount() {
		if (Platform.OS === 'android' ) {
		  BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
		}
   };
  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
  };

  onBackAndroid = () => {
    Alert.alert(
            '退出系统',
            '确定退出系统吗？',
            [
			  {text: '取消'},
			  {text: '确定', onPress: () =>  BackAndroid.exitApp()},
            ]
    );
    return true;
  };

  hideModal = () => {
         this.setState({
             visible: false
         });
     };

  showModal = () => {
           this.setState({
               visible: true
           });
       };

    render() {
		var htmlContent = '<p><a href="http://www.baidu.com">&hearts; nice job!</a></p>'
		var doms = [];
		for (var i = 0; i < 40; i++) {
		 // doms.push(<ListItem><Text>Simon Mignolet----- + {i} </Text></ListItem>);
		};
		var swipeoutBtns = [
				  {
					text: 'Button'
				  }
		      ];

        return (
		 //<SideMenu menu={menu}>
		  <TwoSideMenus
			ref="menu"
			leftMenu={<Menu parentObj={this} ref="leftMenu" color="yellow"/>}
			rightMenu={<Menu parentObj={this} ref="rightMenu" color="red"/>}>

            <Container style={{ backgroundColor: 'white',borderLeftWidth:1,borderLeftColor:'#CCCCCC',}}>
                <Header searchBar rounded>
                    <Item success>
                        <Icon name="search" />
                        <Input placeholder="Search" />
                    </Item>
                    <Button danger  style={{width:60,height:40,marginLeft:2,}}   onPress={() => this.refs.menu.openMenu('left')} >
                        <Text>查询</Text>
                    </Button>
                </Header>
				<Content>
          <Modal
              style={{
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  flex:1,
                  justifyContent:'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
              visible={this.state.visible}
          >
            <Text style={{color:'white',}}>
               Just put  element anywhere, And it will be front of other elements. And you can set element`s style or other properties inherited from element}
            </Text>
            <TouchableHighlight
                   style={[styles.button, styles.close]}
                   underlayColor="#aaa"
                   onPress={this.hideModal}
               >
                   <Text style={{color:'red',fontSize:34,}}>Close</Text>
               </TouchableHighlight>
           </Modal>
                   <LButton
					  onPress={onButtonPress2}
					  title="Press Me"
					  accessibilityLabel="See an informative alert"
					/>

					<HTMLView style={{height:40,}}
						value={htmlContent}
						onLinkPress={(url) => Linking.openURL.call(Linking, url)}
					    stylesheet={styles}
					  />

					<Swipeable
					  left={[
						{
						  text: 'reply',
						  onPress:() => console.log('reply'),
						  style: { backgroundColor: 'orange',  },
						  renderChildren: () => <View><Text> 设置级别 </Text></View>
						}
					  ]}
					  right={[
						{
						  text: 'delete',
						  onPress:() => Alert.alert('delete'),
						  style: { backgroundColor: 'red',  },
						  renderChildren: () => <View><Text> 删除</Text></View>
						},
						{
						  text: 'delete',
						  onPress:() => Alert.alert('delete'),
						  style: { backgroundColor: 'yellow',  },
						  renderChildren: () => <View><Text> 删除</Text></View>
						}
					  ]}
					  onOpen={() => console.log('open')}
					  onClose={() => console.log('close')}
					>
					  <View style={{flex: 1,height:40, justifyContent: 'center'}}><Text> Tsdfe right children </Text></View>
					</Swipeable>

					<DatePicker
						style={{width: 200}}
						date={this.state.date}
						mode="date"
						placeholder="select date"
						format="YYYY-MM-DD"
						minDate="2016-05-01"
						maxDate="2016-06-01"
						confirmBtnText="Confirm"
						cancelBtnText="Cancel"
						customStyles={{
						  dateIcon: {
							position: 'absolute',
							right: 0,
							top: 4,
							marginLeft: 0
						  },
						  dateInput: {
							marginLeft: 36
						  }
						  // ... You can check the source to find the other keys.
						}}
						onDateChange={(date) => {this.setState({date: date})}}
					  />
					<ImagePro
					  source={{ uri: 'http://loremflickr.com/640/480/dog' }}
					  indicator={ProgressBar}
					  style={{
						width: 320,
						height: 240,
					  }}/>

        <List>
          <ListItem>
              <AutoGrowingTextInput  placeholder={'Your Message'} />
          </ListItem>
          <ListItem>
            <AutoGrowingTextInput  placeholder={'Your Message'} />
          </ListItem>
          <ListItem>
             <AutoGrowingTextInput  placeholder={'Your Message'} />
          </ListItem>
      </List>

				</Content>
                <Footer>
                   <FooterTab>
                        <Button onPress={this.showModal}>
                            <Icon name='ios-apps-outline' />
							<Text style={{color:'white',fontWeight:'bold',}}>帮助</Text>
                        </Button>
                        <Button  badgeValue="2">
                            <Icon name='ios-camera-outline' />
							<Text >Camera</Text>
                        </Button>
                        <Button active>
                            <Icon name='ios-compass' />
							<Text>Navigate</Text>
                        </Button>
                        <Button>
                            <Icon name='ios-contact-outline' />
							<Text>Contact</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
		 </TwoSideMenus>
	 	 //</SideMenu>
        );
    }
}


AppRegistry.registerComponent('reactApp', () => reactApp);
