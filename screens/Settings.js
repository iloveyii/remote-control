import React from 'react';
import { View, Text } from 'react-native';

export default class Settings extends React.Component {

    render() {
        console.log("AboutScreen render");

        return(
            <View>
                <Text>This is the Settings Screen</Text>
            </View>
        );
    }
}