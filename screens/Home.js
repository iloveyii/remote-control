import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class Home extends React.Component {

    render() {
        console.log("AboutScreen render");

        return(
            <View style={styles.container}>
                <Button style={styles.button} title="List" onPress={()=>this.props.navigation.navigate('List')} />
                <Text>This is the Home Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button : {
        width: '30px',
        padding: 5
    }
})