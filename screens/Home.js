import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import axios from 'axios';

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            mute: false
        };
        this.mute = this.mute.bind(this);
    }

    componentDidMount() {
    }

    mute() {
        this.setState({mute: ! this.state.mute});
        console.log('Mute status: ' + this.state.mute);

        axios.get("http://eplayer.softhem.se/?cmdadd=MUT%201").then((response) => {
            console.log(response.data);
        });
    }

    render() {
        console.log("AboutScreen render");

        return(
            <View style={styles.container}>
                <View style={styles.top}>
                    <Button style={styles.button} title="List" onPress={()=>this.mute} />
                </View>

                <View style={styles.middle}>
                    <Button style={styles.button} title="List" onPress={()=>this.props.navigation.navigate('List')} />
                </View>

                <View style={styles.bottom}>
                    <View style={{display: 'flex', justifyContent: 'center'}}>
                        <View style={styles.full1}><Button style={styles.button} title="V+" onPress={()=>this.props.navigation.navigate('List')} /></View>
                        <View style={styles.full2}>
                            <Button style={styles.button} title="List" onPress={()=>this.props.navigation.navigate('List')} />
                            <Button style={styles.button} title="List" onPress={()=>this.props.navigation.navigate('List')} />
                        </View>
                        <View style={styles.full3}><Button style={styles.button} title="V-" onPress={()=>this.props.navigation.navigate('List')} /></View>
                    </View>
                </View>


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
        padding: 5,
        width: '100%'
    },
    image: {
        width: '100%',
        height: 400,
        resizeMode: 'stretch',
        padding: 5
    },
    top : {
        width: '100%',
        height: '20%',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    middle : {
        width: '100%',
        height: '30%',
        alignItems: 'center',
        backgroundColor: 'green'
    },
    bottom : {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    full1: {
        flex: 1,
        width: '100%',
        height: '33%',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    full2: {
        flex: 1,
        width: '100%',
        height: '33%',
        alignItems: 'center',
        backgroundColor: 'white'
    },

    full3: {
        width: '100%',
        height: '33%',
        alignItems: 'center',
        backgroundColor: 'white'
    }
});