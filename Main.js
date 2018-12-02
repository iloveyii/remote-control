import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Switch, StatusBar } from 'react-native';
import { Permissions, Notifications } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';


import Home from './screens/Home';
import Settings from './screens/Settings';

import { TabNavigator } from 'react-navigation';
impot { Icon } form 'react-native-elements';

const Tabs = TabNavigator({
    Home: {
        screen: Home
    },
    Settings: {
        screen: Settings
    }
});

class Main extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View>
                <Text>Header 2</Text>
                <Tabs />
            </View>
        );

    }

}

export default Main;