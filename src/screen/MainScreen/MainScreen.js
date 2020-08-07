import React, { useState, useEffect, useReducer, useRef, useCallback } from "react";
import { View, Text, StyleSheet, FlatList, useWindowDimensions } from 'react-native';
import * as axios from 'axios';

import { Preloader } from '../../components';
import { ImageCard } from "../../components/ImageCard";
import { ScrollView } from "react-native-gesture-handler";
import { DropdownRow,DropdownItem } from "../../components/Dropdown";

const URL = 'https://instasport.co/dashboard/api/v1/clubs';

const dataFetchingReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_INIT":
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case "FETCH_SUCCESS":
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload
            }
        case "FETCH_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            throw new Error();
    }
}


const useDataURL = (url, initialData) => {
    const [state, dispatch] = useReducer(dataFetchingReducer, { isLoading: false, isError: false, data: initialData })

    useEffect(() => {

        const fetchData = async () => {
            dispatch({ type: 'FETCH_INIT' })
            try {
                const response = await axios.get(url)
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
            } catch (error) {
                dispatch({ type: 'FETCH_ERROR' });
            }
        }
        fetchData()

    }, [url]);
    return state
}

const MainScreen = ({ navigation }) => {

    const { isLoading, isError, data } = useDataURL(URL, null);
    const RefSportCards = useRef(null);
    const [filteredData, setFilteredData] = useState(data);
    const [city, setCity] = useState('');
    const [activity, setActivity] = useState('');
    
    useEffect(() => {
      
        if (data) setFilteredData(data)

    }, [data])

    useEffect(() => {

        if (RefSportCards.current && filteredData.length)
            RefSportCards.current.scrollToIndex({ animated: true, index: 0 })
        if (data) setFilteredData(prevfilteredData => data.filter(i => {

            if (city && !activity) return i.city.title === city
            if (!city && activity) return i.activity.find(i => i.title === activity)
            if (city && activity) return i.city.title === city && i.activity.find(i => i.title === activity)

        }))

    }, [city, activity])

    useEffect(() => {

        setActivity('')

    }, [city])

    const { width, height } = useWindowDimensions();
    const { container, sub, errorText, flatListView, emptyDataView } = styles;

    return (
        <View style={container}>

            {isError && <Text style={errorText}>Ошибка разбора данных</Text>}
            {isLoading ? <Preloader loading={isLoading} />
                : (
                    <View style={sub}>

                        <DropdownRow>
                            <DropdownItem data={data} setValue={setCity} derivedProp={'city'} placeholder={'Выбор города'} searchablePlaceholder={'Поиск города'} />
                            <DropdownItem data={filteredData} setValue={setActivity} derivedProp={'activity'} placeholder={'Выбор спортивного направления'} searchablePlaceholder={'Поиск спортивного направления'} />

                        </DropdownRow>

                        <View style={flatListView}>
                            <ScrollView >

                                {!!data ? (<FlatList
                                    ref={RefSportCards}
                                    horizontal={true}
                                    data={filteredData}
                                    initialNumToRender={5}
                                    keyExtractor={(item, index) => index.toString()}
                                    style={{ marginVertical: height > width ? 40 : 15, alignSelf: 'center' }}
                                    contentContainerStyle={{alignItems:'center'}}
                                    decelerationRate="fast"
                                    snapToAlignment="center"
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item, index }) => {

                                        return <ImageCard keys={index} imagedata={item.logo} title={item.title} width={width} height={height} onPress={() => navigation.navigate('Details', { item })} />
                                    }}
                                />) :
                                    (<View style={emptyDataView}>
                                        <Text>Спортивные комплексы отсутствуют!</Text>
                                    </View>)
                                }
                            </ScrollView>
                        </View>
                    </View>
                )
            }
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1'
    },
    sub: {
        flex: 1, alignSelf: 'stretch'
    },
    errorText: {
        fontSize: 18,
        color: 'grey',
        fontWeight: "200"
    },
    flatListView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptyDataView: {
        justifyContent: 'center',
        alignItems: 'center'
    }

})

export { MainScreen }