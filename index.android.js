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
import Calendar from 'react-native-calendar';
import moment from 'moment';

const customDayHeadings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const customMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
  'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

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

 const customStyle = {
    eventIndicator: {
      backgroundColor: 'blue',
      width: 10,
      height: 10,
    },
  }

export default class reactApp extends Component {
	  constructor(props) {
        super(props);
        this.state = {
		  selectedDate: moment().format(),
		};
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
             <Calendar customStyle={customStyle} 
				  ref="calendar"
				  
				  eventDates={['2017-02-03', '2017-02-05', '2017-02-28', '2017-02-30']}
				  events={[{date: '2017-02-04', hasEventCircle: {backgroundColor: 'powderblue'}}]}
				  scrollEnabled
				  showControls
				  dayHeadings={customDayHeadings}
				  monthNames={customMonthNames}
				  titleFormat={'MMMM YYYY'}
				  prevButtonText={'Prev'}
				  nextButtonText={'Next'}
				  onDateSelect={(date) => this.setState({ selectedDate: date })}
				  onTouchPrev={(e) => console.log('onTouchPrev: ', e)}
				  onTouchNext={(e) => console.log('onTouchNext: ', e)}
				  onSwipePrev={(e) => console.log('onSwipePrev: ', e)}
				  onSwipeNext={(e) => console.log('onSwipeNext', e)}
				/>
				<Text>Selected Date: {moment(this.state.selectedDate).format('MMMM DD YYYY')}</Text>
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
