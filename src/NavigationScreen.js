import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MainScreen, DetailsScreen } from './screen';

const Stack = createStackNavigator();

const Main = ({ navigation }) => {
    return (
        <MainScreen navigation={navigation} />
    );
}

const Details = ({ navigation, route }) => {
    return (
        <DetailsScreen navigation={navigation} route={route} />
    );
}

const NavigationScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen name="Main" component={Main}
                    options={{ headerTintColor: '#fff', headerTitle: 'Главная', headerStyle: { backgroundColor: '#074B81', } }}
                />
                <Stack.Screen name="Details" component={Details}
                    options={{ headerTintColor: '#fff', headerTitle: 'Детали', headerStyle: { backgroundColor: '#074B81' } }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigationScreen