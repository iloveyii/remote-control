import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import ReactPlayer from 'react-player'


export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            picIndex : 0,
            pics : [
                'https://media.licdn.com/dms/image/C4E03AQEiPGGFO6QChw/profile-displayphoto-shrink_200_200/0?e=1549497600&v=beta&t=Nh8aM6p8avbTUgjU37y_C3xuPyKgGpEEn_Ouzu41qFU',
                'http://softhem.se/motion/01-20180303093457-00.jpg',
                'http://softhem.se/motion/01-20180303093457-00.jpg',
                'http://softhem.se/motion/01-20180303093457-01.jpg',
                'http://softhem.se/motion/01-20180303093458-00.jpg',
                'http://softhem.se/motion/01-20180303093458-01.jpg',
                'http://softhem.se/motion/01-20180303093459-00.jpg',
                'http://softhem.se/motion/01-20180303093459-01.jpg',
                'http://softhem.se/motion/01-20180303093500-00.jpg',
                'http://softhem.se/motion/01-20180303093500-01.jpg',
                'http://softhem.se/motion/01-20180303093501-00.jpg',
                'http://softhem.se/motion/01-20180303093501-01.jpg',
                'http://softhem.se/motion/01-20180303093502-00.jpg',
                'http://softhem.se/motion/01-20180303093502-01.jpg',
                'http://softhem.se/motion/01-20180303093503-00.jpg',
                'http://softhem.se/motion/01-20180303093503-01.jpg',
                'http://softhem.se/motion/01-20180303093504-00.jpg',
                'http://softhem.se/motion/01-20180303093507-00.jpg',
                'http://softhem.se/motion/01-20180303093507-01.jpg',
                'http://softhem.se/motion/01-20180303093508-00.jpg',
                'http://softhem.se/motion/01-20180303093508-01.jpg',
                'http://softhem.se/motion/01-20180303093509-00.jpg',
                'http://softhem.se/motion/01-20180303093509-01.jpg',
                'http://softhem.se/motion/01-20180303093510-00.jpg',
                'http://softhem.se/motion/01-20180303093510-01.jpg',
                'http://softhem.se/motion/01-20180303093512-01.jpg',
                'http://softhem.se/motion/01-20180303093513-00.jpg',
                'http://softhem.se/motion/01-20180303093513-01.jpg',
                'http://softhem.se/motion/01-20180303093514-00.jpg',
                'http://softhem.se/motion/01-20180303093514-01.jpg',
                'http://softhem.se/motion/01-20180303093515-00.jpg',
                'http://softhem.se/motion/01-20180303093515-01.jpg',
                'http://softhem.se/motion/01-20180303093516-00.jpg',
                'http://softhem.se/motion/01-20180303093516-01.jpg',
                'http://softhem.se/motion/01-20180303093517-00.jpg',
                'http://softhem.se/motion/01-20180303093517-01.jpg',
                'http://softhem.se/motion/01-20180303093518-00.jpg',
                'http://softhem.se/motion/01-20180303093518-01.jpg',
                'http://softhem.se/motion/01-20180303093519-00.jpg',
                'http://softhem.se/motion/01-20180303093519-01.jpg',
                'http://softhem.se/motion/01-20180303093520-00.jpg',
                'http://softhem.se/motion/01-20180303093520-01.jpg',
                'http://softhem.se/motion/01-20180303093521-00.jpg',
                'http://softhem.se/motion/01-20180303093521-01.jpg',
                'http://softhem.se/motion/01-20180303093522-00.jpg',
                'http://softhem.se/motion/01-20180303093522-01.jpg',
                'http://softhem.se/motion/01-20180303093538-01.jpg',
                'http://softhem.se/motion/01-20180303093539-00.jpg',
                'http://softhem.se/motion/01-20180303093539-01.jpg',
                'http://softhem.se/motion/01-20180303093540-00.jpg',
                'http://softhem.se/motion/01-20180303093540-01.jpg',
                'http://softhem.se/motion/01-20180303093541-00.jpg',
                'http://softhem.se/motion/01-20180303093541-01.jpg',
                'http://softhem.se/motion/01-20180303093542-00.jpg',
                'http://softhem.se/motion/01-20180303093542-01.jpg',
                'http://softhem.se/motion/01-20180303093543-00.jpg',
                'http://softhem.se/motion/01-20180303093543-01.jpg',
                'http://softhem.se/motion/01-20180303093544-00.jpg',
                'http://softhem.se/motion/01-20180303093544-01.jpg',
                'http://softhem.se/motion/01-20180303093545-00.jpg',
                'http://softhem.se/motion/01-20180303093545-01.jpg',
                'http://softhem.se/motion/01-20180303093546-00.jpg',
                'http://softhem.se/motion/01-20180303093546-01.jpg',
                'http://softhem.se/motion/01-20180303093547-00.jpg',
                'http://softhem.se/motion/01-20180303093547-01.jpg',
                'http://softhem.se/motion/01-20180303093548-00.jpg',
                'http://softhem.se/motion/01-20180303093548-01.jpg',
                'http://softhem.se/motion/01-20180303093549-00.jpg',
                'http://softhem.se/motion/01-20180303170844-01.jpg',
                'http://softhem.se/motion/01-20180303170905-00.jpg',
                'http://softhem.se/motion/01-20180303170905-01.jpg',
                'http://softhem.se/motion/01-20180303170906-00.jpg',
                'http://softhem.se/motion/01-20180303170906-01.jpg',
                'http://softhem.se/motion/01-20180303170907-00.jpg',
                'http://softhem.se/motion/01-20180303170907-01.jpg',
                'http://softhem.se/motion/01-20180303170908-00.jpg',
                'http://softhem.se/motion/01-20180303170908-01.jpg',
                'http://softhem.se/motion/01-20180303170909-00.jpg',
                'http://softhem.se/motion/01-20180303170909-01.jpg',
                'http://softhem.se/motion/01-20180303170910-00.jpg',
                'http://softhem.se/motion/01-20180303170910-01.jpg',
                'http://softhem.se/motion/01-20180303170911-00.jpg',
                'http://softhem.se/motion/01-20180303170911-01.jpg',
                'http://softhem.se/motion/01-20180303170912-00.jpg',
                'http://softhem.se/motion/01-20180303170912-01.jpg',
                'http://softhem.se/motion/01-20180303170913-00.jpg',
                'http://softhem.se/motion/01-20180303170913-01.jpg',
                'http://softhem.se/motion/01-20180303170914-00.jpg',
                'http://softhem.se/motion/01-20180303170915-00.jpg',
                'http://softhem.se/motion/01-20180303170915-01.jpg',
                'http://softhem.se/motion/01-20180303170916-01.jpg',
                'http://softhem.se/motion/01-20180303170917-00.jpg',
                'http://softhem.se/motion/01-20180303170917-01.jpg',
                'http://softhem.se/motion/01-20180303170918-00.jpg',
                'http://softhem.se/motion/01-20180303170918-01.jpg',
                'http://softhem.se/motion/01-20180303170919-00.jpg',
                'http://softhem.se/motion/01-20180303170919-01.jpg',
                'http://softhem.se/motion/01-20180303170920-00.jpg',
                'http://softhem.se/motion/01-20180303170920-01.jpg',
                'http://softhem.se/motion/01-20180303170925-01.jpg',
                'http://softhem.se/motion/01-20180303170927-01.jpg',
                'http://softhem.se/motion/01-20180303170928-00.jpg',
                'http://softhem.se/motion/01-20180303170929-00.jpg',
                'http://softhem.se/motion/01-20180303170929-01.jpg',
                'http://softhem.se/motion/01-20180303170932-00.jpg',
                'http://softhem.se/motion/01-20180303170932-01.jpg',
                'http://softhem.se/motion/01-20180303170933-00.jpg',
                'http://softhem.se/motion/01-20180303170933-01.jpg',
                'http://softhem.se/motion/01-20180303170934-00.jpg',
                'http://softhem.se/motion/01-20180303170934-01.jpg',
                'http://softhem.se/motion/01-20180303170935-00.jpg',
                'http://softhem.se/motion/01-20180303170935-01.jpg',
                'http://softhem.se/motion/01-20180303170936-00.jpg',
                'http://softhem.se/motion/01-20180303170936-01.jpg',
                'http://softhem.se/motion/01-20180303170937-00.jpg',
                'http://softhem.se/motion/01-20180303170937-01.jpg',
                'http://softhem.se/motion/01-20180303170938-00.jpg',
                'http://softhem.se/motion/01-20180303170938-01.jpg',
                'http://softhem.se/motion/01-20180303170939-00.jpg',
                'http://softhem.se/motion/01-20180303170939-01.jpg',
                'http://softhem.se/motion/01-20180303170940-00.jpg',
                'http://softhem.se/motion/01-20180303170940-01.jpg',
                'http://softhem.se/motion/01-20180303170941-00.jpg',
                'http://softhem.se/motion/01-20180303170941-01.jpg',
                'http://softhem.se/motion/01-20180303170942-00.jpg',
                'http://softhem.se/motion/01-20180303170942-01.jpg',
                'http://softhem.se/motion/01-20180303170943-00.jpg',
                'http://softhem.se/motion/01-20180303170943-01.jpg',
                'http://softhem.se/motion/01-20180303170944-00.jpg',
                'http://softhem.se/motion/01-20180303170944-01.jpg',
                'http://softhem.se/motion/01-20180305125800-01.jpg',
                'http://softhem.se/motion/01-20180305125801-00.jpg',
                'http://softhem.se/motion/01-20180305125801-01.jpg',
                'http://softhem.se/motion/01-20180305125802-00.jpg',
                'http://softhem.se/motion/01-20180305125802-01.jpg',
                'http://softhem.se/motion/01-20180305125803-00.jpg',
                'http://softhem.se/motion/01-20180305125803-01.jpg',
                'http://softhem.se/motion/01-20180305125804-00.jpg',
                'http://softhem.se/motion/01-20180305125804-01.jpg',
                'http://softhem.se/motion/01-20180305125805-00.jpg',
                'http://softhem.se/motion/01-20180305125805-01.jpg',
                'http://softhem.se/motion/01-20180305125806-00.jpg',
                'http://softhem.se/motion/01-20180305125806-01.jpg',
                'http://softhem.se/motion/01-20180305125807-00.jpg',
                'http://softhem.se/motion/01-20180305125807-01.jpg',
                'http://softhem.se/motion/01-20180305125808-00.jpg',
                'http://softhem.se/motion/01-20180305125808-01.jpg',
                'http://softhem.se/motion/01-20180305125809-00.jpg',
                'http://softhem.se/motion/01-20180305125809-01.jpg',
                'http://softhem.se/motion/01-20180305125810-00.jpg',
                'http://softhem.se/motion/01-20180305125810-01.jpg',
                'http://softhem.se/motion/01-20180305125811-00.jpg',
                'http://softhem.se/motion/01-20180305125811-01.jpg',
                'http://softhem.se/motion/01-20180305125812-00.jpg',
                'http://softhem.se/motion/01-20180305125812-01.jpg',
                'http://softhem.se/motion/01-20180305125813-00.jpg',
                'http://softhem.se/motion/01-20180305125813-01.jpg',
                'http://softhem.se/motion/01-20180305125814-00.jpg',
                'http://softhem.se/motion/01-20180305125814-01.jpg',
                'http://softhem.se/motion/01-20180305125821-00.jpg',
                'http://softhem.se/motion/01-20180305125821-01.jpg',
                'http://softhem.se/motion/01-20180305125822-00.jpg',
                'http://softhem.se/motion/01-20180305125822-01.jpg',
                'http://softhem.se/motion/01-20180305125823-00.jpg',
                'http://softhem.se/motion/01-20180305125824-00.jpg',
                'http://softhem.se/motion/01-20180305125824-01.jpg',
                'http://softhem.se/motion/01-20180305125825-00.jpg',
                'http://softhem.se/motion/01-20180305125825-01.jpg',
                'http://softhem.se/motion/01-20180305125826-00.jpg',
                'http://softhem.se/motion/01-20180305125826-01.jpg',
                'http://softhem.se/motion/01-20180305125827-00.jpg',
                'http://softhem.se/motion/01-20180305125827-01.jpg',
                'http://softhem.se/motion/01-20180305125828-00.jpg',
                'http://softhem.se/motion/01-20180305125828-01.jpg',
                'http://softhem.se/motion/01-20180305125829-00.jpg',
                'http://softhem.se/motion/01-20180305125829-01.jpg',
                'http://softhem.se/motion/01-20180305125830-00.jpg',
                'http://softhem.se/motion/01-20180305125830-01.jpg',
                'http://softhem.se/motion/01-20180305125831-00.jpg',
                'http://softhem.se/motion/01-20180305125831-01.jpg',
                'http://softhem.se/motion/01-20180305125832-00.jpg',
                'http://softhem.se/motion/01-20180305125832-01.jpg',
                'http://softhem.se/motion/01-20180305125833-00.jpg',
                'http://softhem.se/motion/01-20180305125833-01.jpg',
                'http://softhem.se/motion/01-20180305125834-00.jpg',
                'http://softhem.se/motion/01-20180305125837-00.jpg',
                'http://softhem.se/motion/01-20180305125837-01.jpg',
                'http://softhem.se/motion/01-20180305125838-00.jpg',
                'http://softhem.se/motion/01-20180305125838-01.jpg',
                'http://softhem.se/motion/01-20180305125839-00.jpg',
                'http://softhem.se/motion/01-20180305125839-01.jpg',
                'http://softhem.se/motion/01-20180305125840-00.jpg',
                'http://softhem.se/motion/01-20180305125840-01.jpg',
                'http://softhem.se/motion/01-20180305125841-00.jpg',
                'http://softhem.se/motion/01-20180305125841-01.jpg',
                'http://softhem.se/motion/01-20180305125842-00.jpg',
                'http://softhem.se/motion/01-20180305125842-01.jpg',
                'http://softhem.se/motion/01-20180305125843-01.jpg',
                'http://softhem.se/motion/01-20180305125844-00.jpg',
                'http://softhem.se/motion/01-20180305125844-01.jpg',
                'http://softhem.se/motion/01-20180305125845-00.jpg',
                'http://softhem.se/motion/01-20180305125845-01.jpg',
                'http://softhem.se/motion/01-20180305125846-00.jpg',
                'http://softhem.se/motion/01-20180305125846-01.jpg',
                'http://softhem.se/motion/01-20180305125847-00.jpg',
                'http://softhem.se/motion/01-20180305125847-01.jpg',
                'http://softhem.se/motion/01-20180305125848-00.jpg',
                'http://softhem.se/motion/01-20180305125848-01.jpg',
                'http://softhem.se/motion/01-20180305125849-00.jpg',
                'http://softhem.se/motion/01-20180305125849-01.jpg',
                'http://softhem.se/motion/01-20180305125850-00.jpg',
                'http://softhem.se/motion/01-20180305125850-01.jpg',
                'http://softhem.se/motion/01-20180305125851-00.jpg',
                'http://softhem.se/motion/01-20180305125851-01.jpg',
                'http://softhem.se/motion/01-20180305125856-00.jpg',
                'http://softhem.se/motion/01-20180305125858-00.jpg',
                'http://softhem.se/motion/01-20180305125858-01.jpg',

            ],
            uri : 'https://media.licdn.com/dms/image/C4E03AQEiPGGFO6QChw/profile-displayphoto-shrink_200_200/0?e=1549497600&v=beta&t=Nh8aM6p8avbTUgjU37y_C3xuPyKgGpEEn_Ouzu41qFU'
        };
    }

    componentDidMount() {
        console.log(this.state.pics.length);
        this.rotateIndex();
    }

    rotateIndex() {
        setInterval(()=>{
            this.setState( { picIndex: this.state.picIndex < this.state.pics.length - 1 ? this.state.picIndex + 1 : 0 })
        }, 500, this);
    }

    render() {
        console.log("AboutScreen render");

        return(
            <View style={styles.container}>
                <View>
                    <Button style={styles.button} title="List" onPress={()=>this.props.navigation.navigate('List')} />
                    <Text>This is the Home Screen {this.state.pics.length} </Text>
                    <Text>This is the Home Screen {this.state.picIndex} </Text>
                </View>

                <Image
                    style={styles.image}
                    source={{uri: this.state.pics[this.state.picIndex]}}
                />

                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
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