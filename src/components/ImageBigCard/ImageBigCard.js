import React from 'react';
import { View, StyleSheet, Image, Dimensions, ImageBackground } from 'react-native';


const { width, height } = Dimensions.get('window')

const ImageBigCard = ({ imagedata }) => {

    const { container, imageView, sub, shadowView } = styles;

    return (

        <View style={container}>
            <View style={sub}>
                <ImageBackground style={imageView} source={{ uri: imagedata }} imageStyle={{
                    // width: width / 2,
                    height: height / 2.5,
                    resizeMode: 'cover'
                }} />
                <View style={shadowView}></View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        // marginBottom: 20,

        zIndex: 0
    },
    sub: {
        shadowColor: '#000',
        // borderRadius: 10,
        // paddingTop: 20,
        // justifyContent:'center',
        alignItems: 'center',
        paddingBottom: 0,
        backgroundColor: 'white',
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4,
        elevation: 5,
        position: 'relative'
    },
    shadowView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.15)',
        position: 'absolute',
        zIndex: 1,
        height: "100%",
        width: "100%",
        top: 0,
        left: 0
    },

    imageView: {
        // borderRadius: 10,

        width: width,
        height: height / 3,
    }
})

export { ImageBigCard };