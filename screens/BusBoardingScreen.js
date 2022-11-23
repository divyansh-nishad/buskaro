import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component, useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const BusBoardingScreen = (lat, lon, dest) => {
    const nav = useNavigation();
    const [location, setLocation] = useState();
    const [errorMsg, setErrorMsg] = useState();
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()

    useEffect(() => {
        // (async () => {

        //     let { status } = await Location.requestForegroundPermissionsAsync();
        //     if (status !== 'granted') {
        //         setErrorMsg('Permission to access location was denied');
        //         return;
        //     }

        //     let location = await Location.getCurrentPositionAsync({});
        //     setLocation(location);
        //     setLatitude(location.coords.latitude)
        //     setLongitude(location.coords.longitude)
        //     // console.log(latitude)
        //     // console.log(longitude)
        // })();
        setLatitude(lat)
        setLongitude(lon)
    }, []);

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
                    <Ionicons name="chevron-back-outline" size={28} color="#2d179b" />
                </TouchableOpacity>
            </View>
            <View style={styles.busItem}>
                <View style={styles.busItemLeft}>
                    <Text style={styles.busName}>Bus 1</Text>
                    <Text style={styles.busNumber}>UP 8900</Text>
                    <View style={styles.route}>
                        <Text style={styles.routeSource}>Kathmandu</Text>
                        <MaterialIcons name="compare-arrows" size={28} color="#2d179b" />
                        <Text style={styles.routeDest}>Pokhara</Text>
                    </View>
                </View>
                <View style={styles.busItemRight}>
                    <View style={styles.crowdBox}>
                        <Text style={styles.crowd}>56%</Text>
                    </View>
                    <Text style={styles.price}>Rs. 500</Text>
                </View>
            </View>
            <View style={styles.mapBox}>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: latitude,
                        longitude: longitude,
                        // latitude: 37.78825,
                        // longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >

                    <Marker
                        coordinate={{
                            latitude: latitude,
                            longitude: longitude,
                        }}
                        title="You are here!"
                    // pinColor="#2d179b"
                    />
                </MapView>
            </View>
            <View style={styles.infoTextBox}>
                <Text style={styles.infoText}>
                    Press the button below right after you board the bus.
                </Text>
            </View>
            <TouchableOpacity
                style={styles.boardingBtn}
                onPress={() => nav.navigate('BusInfo')}
            >
                <Text style={styles.boardingBtnText}>Boarded</Text>
            </TouchableOpacity>
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
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    backBtn: {
        padding: 12,
        backgroundColor: '#e1dbff',
        borderRadius: 10,
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
    mapBox: {
        height: '60%',
        width: '100%',
        // marginTop: 20,
        // marginBottom: 20,
        borderRadius: 10,
        overflow: 'hidden',
    },
    map: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    infoTextBox: {},
    infoText: {},
    boardingBtn: {
        backgroundColor: '#e1dbff',
        paddingVertical: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    boardingBtnText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2d179b',
    },
})

export default BusBoardingScreen
