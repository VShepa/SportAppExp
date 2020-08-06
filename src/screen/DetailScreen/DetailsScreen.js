import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { ImageBigCard } from "../../components/ImageBigCard";

const { width } = Dimensions.get('window')

const DetailsScreen = ({ route }) => {
    const { logo, title } = route.params.item
    const { container, sub, textTitle, textText } = styles
    return (
        <View style={container}>
            <ScrollView>
                <View style={sub}>
                    <ImageBigCard imagedata={logo} />
                    <Text style={textTitle}>{title.toUpperCase()}</Text>
                    <Text style={textText}>Подробная информация о спорткомплексе</Text>
                </View>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    sub: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 150,
        backgroundColor: '#fff'
    },
    cover: {
        width: width,
        height: width * 1.5,
        borderRadius: 10
    },
    textTitle: {
        fontSize: 30,
        padding: 15,
        textAlign: 'center'
    },
    textText: {
        fontSize: 15,
        textAlign: 'center',
        color: 'grey',
        paddingHorizontal: 15
    }
})

export { DetailsScreen }