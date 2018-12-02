import React from 'react';
import { View, Text } from 'react-native';

export default class Home extends React.Component {

    render() {
        console.log("AboutScreen render");

        return(
            <View>
                <Text>This is the Home Screen</Text>
            </View>
        );
    }
}