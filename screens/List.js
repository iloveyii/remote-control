import React from 'react';
import { View, Text } from 'react-native';

export default class List extends React.Component {

    render() {
        console.log("List Screen render");

        return(
            <View>
                <Text>This is the List Screen</Text>
            </View>
        );
    }
}