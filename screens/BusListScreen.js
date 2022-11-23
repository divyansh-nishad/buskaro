import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component, useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const BusListScreen = ({ lat, lon, dest }) => {
    const nav = useNavigation()
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()

    // useEffect(() => {
    //     setLatitude(lat)
    //     setLongitude(lon)
    // }, [])


    useLayoutEffect(() => {
        nav.setOptions({
            headerShown: false,
        })
    }, [nav])

    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <TouchableOpacity
                    style={styles.backBtn}
                    onPress={() => nav.goBack()}
                >
                    <Ionicons name="chevron-back-outline" size={28} color="#2596D0" />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.busList}>
                <TouchableOpacity
                    style={styles.busItem}
                    onPress={() => nav.navigate('BusBoarding')}
                >
                    <View style={styles.busItemTop}>
                        <Text style={styles.busName}>Bus 1</Text>
                        <Text style={styles.busNumber}>UP 8900</Text>
                        <View style={styles.route}>
                            <Text style={styles.routeSource}>Kathmandu</Text>
                            <MaterialIcons name="compare-arrows" size={28} color="#2d179b" />
                            <Text style={styles.routeDest}>Pokhara</Text>
                        </View>
                    </View>
                    <View style={styles.busItemBottom}>
                        <View style={styles.crowdBox}>
                            <Text style={styles.crowd}>56%</Text>
                        </View>
                        <Text style={styles.price}>Rs. 500</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: '#fff',
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    backBtn: {
        padding: 12,
        backgroundColor: '#eaf8ff',
        borderRadius: 50,
    },
    busList: {
        marginVertical: 20,
    },
    busItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderColor: '#dedede',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
    },
    route: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: '#e1dbff',
        borderRadius: 50,
    },
    busName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    busNumber: {
        fontSize: 16,
        marginVertical: 5,
    },
    routeSource: {
        marginRight: 10,
    },
    routeDest: {
        marginLeft: 10,
    },
    crowdBox: {
        backgroundColor: '#e1dbff',
        borderRadius: 50,
        padding: 10,
        alignItems: 'center',
    },
    crowd: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2d179b',
    },
    price: {
        fontSize: 28,
    },
})

export default BusListScreen
