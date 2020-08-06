import React from 'react';
import { View, StyleSheet, Image, Dimensions, } from 'react-native';


const { width, height } = Dimensions.get('window')

const ImageBigCard = ({ imagedata }) => {

    const { container, imageView, sub } = styles;

    return (

        <View style={container}>
            <View style={sub}>
                <Image style={imageView} source={{ uri: imagedata }} />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20
    },
    sub: {
        shadowColor: '#000',
        borderRadius: 10,
        backgroundColor: 'white',
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4,
        elevation: 5
    },
    imageView: {
        borderRadius: 10,

        width: width - 20,
        height: height / 3,
    }
})

export { ImageBigCard };