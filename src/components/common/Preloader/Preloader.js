import React from 'react';
import {
    StyleSheet,
    View,
    ActivityIndicator
} from 'react-native';


const Preloader = ({ loading }) => {
    const { activityIndicatorWrapper } = styles

    return (
        !!loading && <View style={activityIndicatorWrapper}>
            <ActivityIndicator
                animating={loading} size={50} color='#085FA3' />
        </View>

    )
}

const styles = StyleSheet.create({
    activityIndicatorWrapper: {
        position: 'absolute',
        backgroundColor: '#ecf0f1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
       
    }
});

export { Preloader };