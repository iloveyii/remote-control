import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default class Home extends React.Component {

    render() {
        console.log("AboutScreen render");

        return(
            <View style={styles.container}>
                <View>
                    <Button style={styles.button} title="List" onPress={()=>this.props.navigation.navigate('List')} />
                    <Text>This is the Home Screen 3</Text>
                </View>

                <Image
                    style={styles.image}
                    source={{uri: 'https://media.licdn.com/dms/image/C4E03AQEiPGGFO6QChw/profile-displayphoto-shrink_200_200/0?e=1549497600&v=beta&t=Nh8aM6p8avbTUgjU37y_C3xuPyKgGpEEn_Ouzu41qFU'}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        display : 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header : {
        alignItems: 'center'
    },
    button : {
        flex: 1,
        padding: 5
    },
    image: {
        width: '100%',
        height:200,
        resizeMode: 'stretch'
    }
})