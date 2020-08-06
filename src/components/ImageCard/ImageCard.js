import React, { useMemo } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions, } from 'react-native';

const { width, height } = Dimensions.get('window')

const ImageCard = ({ imagedata, onPress, width, height, title }) => {

    const { container, imageView, containerPort, containerLand, imageViewPort, imageViewLand, textContainer, textTitle } = styles;
    const orientation = useMemo(() => height > width, [width])
    return (

        <View style={container}>
            <TouchableOpacity onPress={onPress} activeOpacity={0.9} >
                <Image style={[imageView, orientation ? imageViewPort : imageViewLand]} source={{ uri: imagedata }} resizeMode="contain" />
                <View style={textContainer}>
                    <Text style={textTitle}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        backgroundColor: 'white',
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4,
        elevation: 5,

    },
    containerPort: {
        width: width / 1.5 - 20,
        height: height / 4,
    },
    containerLand: {
        width: width / 2 - 20,
        height: height / 6,
    },
    imageView: {
        borderRadius: 10,
    },
    imageViewPort: {
        width: width / 1.5 - 20,
        height: height / 4,
    },
    imageViewLand: {
        width: width / 2 - 20,
        height: height / 6,
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    textTitle: {
        color: 'grey',
        fontSize: 18,
        marginBottom: 5,
        fontWeight: 'bold',
        shadowColor: '#000',
        shadowRadius: 8,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5
    },
});

export { ImageCard };