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
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

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
});



export default class reactApp extends Component {
	  constructor(props) {
        super(props);
       
    };
	
    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item success>
                        <Icon name="search" />
                        <Input placeholder="Search" />
                    </Item>
                    <Button danger  style={{width:60,height:40,marginLeft:2,}}>
                        <Text>查询</Text>
                    </Button>
                </Header>
				<Content>
                   <Svg
						height="100"
						width="100"
					>
                <Circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="blue"
                    strokeWidth="2.5"
                    fill="green"
                />
                <Rect
                    x="15"
                    y="15"
                    width="70"
                    height="70"
                    stroke="red"
                    strokeWidth="2"
                    fill="yellow"
                />
            </Svg>
				</Content>
                <Footer>
                   <FooterTab>
                        <Button>                            
                            <Text>Apps</Text>
                            <Icon name='ios-apps-outline' />
                        </Button>
                        <Button>
                            <Text>Camera</Text>
                            <Icon name='ios-camera-outline' />
                        </Button>
                        <Button active>
                            <Text>Navigate</Text>
                            <Icon name='ios-compass' />
                        </Button>
                        <Button>
                            <Text>Contact</Text>
                            <Icon name='ios-contact-outline' />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}


AppRegistry.registerComponent('reactApp', () => reactApp);
