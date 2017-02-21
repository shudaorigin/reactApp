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
var PushNotification = require('react-native-push-notification');
var firstTime = require('react-native-catch-first-time');
var DeviceInfo = require('react-native-device-info');
var HTMLView = require('react-native-htmlview');
import Swipeout from './component/Swipeout.js';



PushNotification.configure({

    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function(token) {
        console.log( 'TOKEN:', token );
    },

    // (required) Called when a remote or local notification is opened or received
    onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );
    },

    // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications) 
    senderID: "YOUR GCM SENDER ID",

    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
        alert: true,
        badge: true,
        sound: true
    },

    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,

    /**
      * (optional) default: true
      * - Specified if permissions (ios) and token (android and ios) will requested or not,
      * - if not, you must call PushNotificationsHandler.requestPermissions() later
      */
    requestPermissions: true,
});


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
});
const onButtonPress = () => {
	 PushNotification.localNotification({
		/* Android Only Properties */
		id: '0', // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
		ticker: "My Notification Ticker", // (optional)
		autoCancel: true, // (optional) default: true
		largeIcon: "ic_launcher", // (optional) default: "ic_launcher"
		smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher"
		bigText: "My big text that will be shown when notification is expanded", // (optional) default: "message" prop
		subText: "This is a subText", // (optional) default: none
		color: "red", // (optional) default: system default
		vibrate: true, // (optional) default: true
		vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
		tag: 'some_tag', // (optional) add tag to message
		group: "group", // (optional) add group to message
		ongoing: false, // (optional) set whether this is an "ongoing" notification

	
		/* iOS and Android properties */
		title: "My Notification Title", // (optional, for iOS this is only used in apple watch, the title will be the app name on other iOS devices)
		message: "My Notification Message", // (required)
		playSound: false, // (optional) default: true
		soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
		number: '10', // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
		repeatType: 'day', // (Android only) Repeating interval. Could be one of `week`, `day`, `hour`, `minute, `time`. If specified as time, it should be accompanied by one more parameter 'repeatTime` which should the number of milliseconds between each interval
		actions: '["Yes", "No"]',  // (Android only) See the doc for notification actions to know more
	});
}; 
 const onButtonPress2 = () => {
	Dialog.prompt("填写资料", null, [{
            text: '确定',
            onPress: (value) => {
               
            },
        }], undefined); 
 };

export default class reactApp extends Component {
	constructor(props) {
        super(props);      
    };
	componentDidMount() {
        SplashScreen.hide();
    };
   componentWillMount() {
		if (Platform.OS === 'android') {
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
            <Container>
                <Header searchBar rounded>
                    <Item success>
                        <Icon name="search" />
                        <Input placeholder="Search" />
                    </Item>
                    <Button danger  style={{width:60,height:40,marginLeft:2,}} >
                        <Text>查询</Text>
                    </Button>
                </Header>
				<Content>
				
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
				
					
				</Content>
                <Footer>
                   <FooterTab>
                        <Button>                
                            <Icon name='ios-apps-outline' />
							<Text>Apps</Text>
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
        );
    }
}


AppRegistry.registerComponent('reactApp', () => reactApp);
