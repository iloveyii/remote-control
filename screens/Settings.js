import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Video } from 'expo';
import VideoPlayer from '@expo/videoplayer';

export default class Settings extends React.Component {

    render() {
        console.log("AboutScreen render");

        return(
            <View>
                <Text>This is the Settings Screen</Text>

                <VideoPlayer
                    style={styles.image}
                    videoProps={{
                        shouldPlay: false,
                        resizeMode: Video.RESIZE_MODE_CONTAIN,
                        source: {
                          uri: 'http://techslides.com/demos/sample-videos/small.mp4',
                        },
                    }}
                    isPortrait={true}
                    playFromPositionMillis={0}
                />

                <VideoPlayer
                    style={styles.image}
                    videoProps={{
                        shouldPlay: false,
                        resizeMode: Video.RESIZE_MODE_CONTAIN,
                        source: {
                          uri: 'http://softhem.se/motion/zara.mp4',
                        },
                    }}
                    isPortrait={true}
                    playFromPositionMillis={0}
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
        height: 400,
        resizeMode: 'stretch',
        padding: 5
    }
});