import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Switch, StatusBar } from 'react-native';
import { Permissions, Notifications } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Home from './screens/Home';
import Settings from './screens/Settings';
import List from './screens/List';

import { TabNavigator , TabBarBottom, StackNavigator } from 'react-navigation';

const HomeStack = StackNavigator({
    Home : {
        screen: Home,
        navigationOptions : {
            title : 'Home'
        }
    },
    List : {
        screen : List,
        navigationOptions : {
            title : 'List'
        }
    }
});

const Tabs = TabNavigator(
{
    Home: {
        screen: HomeStack,
        navigationOptions : {
            tabBarIcon: ({ tintColor }) => {
                return (<View style={{flex: 1, justifyContent:"center", paddingTop: 5}}><Ionicons name="md-home" size={28} color={tintColor}/></View>)
            },
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions : {
            tabBarIcon: ({ tintColor }) => {
                return (<View style={{flex: 1, justifyContent:"center", paddingTop: 5}}><Ionicons name="md-construct" size={28} color={tintColor}/></View>)
            },
        }
    }
},
{
    defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Home') {
              iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            } else if (routeName === 'Settings') {
              iconName = `ios-options${focused ? '' : '-outline'}`;
            }

            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
          },
    }),
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopColor: 'red',
      },
      labelStyle: {
        fontSize: 12,
        fontWeight: 'normal'
      },
      indicatorStyle: {
        borderBottomColor: 'red',
        borderBottomWidth: 4,
      },
    },
    initialRouteName: 'Home',
    order: ['Home', 'Settings'],
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
  },
  {
    ...TabNavigator.Presets,
    animationEnabled: false,
    swipeEnabled: false,
    showIcon: false,
  }


);

class Main extends React.Component {

    constructor() {
        super();
    }

    render() {
        console.disableYellowBox = true;
        return (
            <View style={{flex: 1}}>
                <Tabs />
            </View>
        );

    }

}

export default Main;