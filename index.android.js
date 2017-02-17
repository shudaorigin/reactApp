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
import { Pie } from 'react-native-pathjs-charts';

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
 let data = [{
      "name": "Washington",
      "population": 7694980
    }, {
      "name": "Oregon",
      "population": 2584160
    }, {
      "name": "Minnesota",
      "population": 6590667,
      "color": {'r':223,'g':154,'b':20}
    }, {
      "name": "Alaska",
      "population": 7284698
    }]

    let options = {
      margin: {
        top: 20,
        left: 20,
        right: 20,
        bottom: 20
      },
      width: 350,
      height: 350,
      color: '#2980B9',
      r: 50,
      R: 150,
      legendPosition: 'topLeft',
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      label: {
        fontFamily: 'Arial',
        fontSize: 8,
        fontWeight: true,
        color: '#ECF0F1'
      }
    }


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
                  <Pie data={ [{
							  "name": "Washington",
							  "population": 7694980
							}, {
							  "name": "Oregon",
							  "population": 2584160
							}, {
							  "name": "Minnesota",
							  "population": 6590667,
							  "color": {'r':223,'g':154,'b':20}
							}, {
							  "name": "Alaska",
							  "population": 7284698
							}]}
					  options={{
      margin: {
        top: 20,
        left: 20,
        right: 20,
        bottom: 20
      },
      width: 350,
      height: 350,
      color: '#2980B9',
      r: 50,
      R: 150,
      legendPosition: 'topLeft',
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      label: {
        fontFamily: 'Arial',
        fontSize: 8,
        fontWeight: true,
        color: '#ECF0F1'
      }
    }}
					  accessorKey="population"
					  margin={{top: 20, left: 20, right: 20, bottom: 20}}
					  color="#2980B9"
					  pallete={
						[
						  {'r':25,'g':99,'b':201},
						  {'r':24,'g':175,'b':35},
						  {'r':190,'g':31,'b':69},
						  {'r':100,'g':36,'b':199},
						  {'r':214,'g':207,'b':32},
						  {'r':198,'g':84,'b':45}
						]
					  }
					  r={50}
					  R={150}
					  legendPosition="topLeft"
					  label={{
						fontFamily: 'Arial',
						fontSize: 8,
						fontWeight: true,
						color: '#ECF0F1'
					  }}
					  />
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
