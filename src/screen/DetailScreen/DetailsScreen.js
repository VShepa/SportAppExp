import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { ImageBigCard } from "../../components/ImageBigCard";

const { width } = Dimensions.get('window')

const DetailsScreen = ({ route }) => {
    const { logo, title } = route.params.item
    const { container, sub, textTitle, textText } = styles
    return (
        <View style={container}>

            <View style={sub}>
                <ImageBigCard imagedata={logo} />
                <View style={{ flex: 1, backgroundColor: 'white', marginTop: -40,paddingBottom:40, borderTopLeftRadius: 50, borderTopRightRadius: 50, paddingTop: 20, zIndex: 1, elevation: 10 }}>
                    <ScrollView>
                        <Text style={textTitle}>{title}</Text>
                        <Text style={textText}>Подробная информация о спорткомплексе</Text>
                    </ScrollView>
                </View>
            </View>

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
        // alignItems: 'center',
        // marginBottom: 150,
        backgroundColor: 'white'
    },
    cover: {
        width: width,
        height: width * 1.5,
        borderRadius: 10
    },
    textTitle: {
        fontSize: 30,
        padding: 15,
        textAlign: 'center',
        color:'grey',
        textTransform: 'uppercase',
        shadowColor: '#000',
        shadowRadius: 1,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 2,
        elevation: 1,
    },
    textText: {
        fontSize: 15,
        textAlign: 'center',
        color: 'grey',
        paddingHorizontal: 15,
        shadowColor: '#000',
        shadowRadius: 1,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        elevation: 1,
    }
})

export { DetailsScreen }