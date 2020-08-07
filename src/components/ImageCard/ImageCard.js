import React, { useMemo } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions, } from 'react-native';

const { width, height } = Dimensions.get('window')

const ImageCard = ({ imagedata, onPress, width, height, title }) => {

    const { container, imageView, containerPort, containerLand, imageViewPort, imageViewLand, textContainer, textTitle } = styles;
    const orientation = useMemo(() => height > width, [width])
    return (

        <View style={container}>
            <TouchableOpacity onPress={onPress} activeOpacity={0.9} >
                <View style={containerPort, { borderRadius: 10, alignItems: 'center',}}>
                    <Image style={[imageView, orientation ? imageViewPort : imageViewLand]} source={{ uri: imagedata }} resizeMode="contain" />
                </View>
                <View style={textContainer}>
                    <Text style={textTitle}>{title}</Text>

                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        maxWidth: width / 1.5,
        // justifyContent: 'flex-end',
        margin: 10,
        padding: 10,

        shadowColor: '#000',
        backgroundColor: 'white',
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4,
        elevation: 5,
        borderRadius: 10,
        position:'relative'

    },
    containerPort: {
        width: width / 2,
        height: height / 4,
    },
    containerLand: {
        width: width / 2,
        height: height / 6,
    },
    imageView: {
        // backgroundColor: 'red',
        borderRadius: 10,
        // borderBottomLeftRadius:0,
        // borderBottomRightRadius:0,
    },
    imageViewPort: {
        width: width / 2,
        height: height / 4,
    },
    imageViewLand: {
        width: width / 2,
        height: height / 6,
    },
    textContainer: {
        // flexShrink:1,
        justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 10,

        // borderBottomLeftRadius:10,
        // borderBottomRightRadius:10,
        // backgroundColor:'orange'
    },
    textTitle: {
        color: 'grey',
        
        // backgroundColor: "rgba(0,0,0,0.05)",
        fontSize: 18,
        textAlign: 'center',
        paddingHorizontal: 5,
        paddingVertical: 5,
        // marginBottom: 10,
        fontWeight: 'bold',
        // shadowColor: '#000',
        // shadowRadius: 1,
        // shadowOffset: { width: 1, height: 1 },
        // shadowOpacity: 1,
        // elevation: 1,
        textTransform: 'uppercase',

        // borderBottomLeftRadius:10,
        // borderBottomRightRadius:10,
    },
});

export { ImageCard };