import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Switch, StatusBar } from 'react-native';
import { Permissions, Notifications } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Home from './screens/Home';
import Settings from './screens/Settings';

const HomeNavigator = createStackNavigator({
    MyHome: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    }
});

const SettingsNavigator = createStackNavigator({
    MySettings: {
        screen: Settings,
        navigationOptions: {
            header: null
        }
    }
});

const TabRootNavigator = createBottomTabNavigator({
    MyHome: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            tabBarIcon : ( { tintColor}) => {
                return (<View style={{flex: 1, justifyContent: 'center', paddingTop: 5,}}><Ionicons name="md-home" size={28} color={tintColor}/></View>)
            }
        }
    },
    MySettings : {
        screen: SettingsNavigator,
        navigationOptions: {
            title: 'Settings',
            tabBarIcon : ( { tintColor}) => {
                return (<View style={{flex: 1, justifyContent: 'center', paddingTop: 5,}}><Ionicons name="md-home" size={28} color={tintColor}/></View>)
            }
        }
    }
},
    {
        tabBarOptions: {
            activeTintColor: '#082766',
            inactiveTintColor: '#8C8C8C',
            style: {
                backgroundColor: "white",
                borderTopColor: "transparent"
            }
        },
    }
);

const RootNavigator = createStackNavigator({
    TabRootNavigator: {
        screen: TabRootNavigator,
        navigationOptions: {
            header: null
        }
    },
    TabRootNavigator: {
        screen: TabRootNavigator,
        navigationOptions: {
            header: null
        }
    }
});

class Main extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View>
                <Text>Header</Text>
                <RootNavigator />
            </View>
        );

    }

}

export default Main;