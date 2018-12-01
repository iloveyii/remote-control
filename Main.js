import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Switch, StatusBar } from 'react-native';
import { Permissions, Notifications } from 'expo';

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

class Main extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View>
                <Text>Hi</Text>
            </View>
        );

    }

}

export default Main;