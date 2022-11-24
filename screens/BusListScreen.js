import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component, useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';

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
                    <Ionicons name="chevron-back-outline" size={28} color="#3B82F6" />
                </TouchableOpacity>
            </View>
            <View style={styles.heading}>
                <Text style={styles.header}>
                    Select your ride!
                </Text>
            </View>
            <ScrollView style={styles.busList}>
                <TouchableOpacity
                    style={styles.busItem}
                    onPress={() => nav.navigate('BusBoarding')}
                >
                    <View style={styles.busItemTop}>
                        <View style={styles.itemTopLeft}>
                            <Text style={styles.busNumber}>DE 8900</Text>
                            <Text style={styles.busName}>Delhi Bus Co.</Text>
                        </View>
                        <View style={styles.itemTopRight}>
                            <FontAwesome5 name="bus-alt" size={48} color="#3B82F6" />
                        </View>
                    </View>
                    <View style={styles.itemMiddle}>
                        <View style={styles.route}>
                            <MaterialCommunityIcons name="map-marker-path" size={24} color="#3B82F6" style={styles.pathIcon} />
                            <Text style={styles.routeSource}>
                                Rohini
                            </Text>
                            <MaterialIcons name="compare-arrows" size={24} color="#3B82F6" style={styles.routeIcon} />
                            <Text style={styles.routeDest}>
                                Shastri Nagar
                            </Text>
                        </View>
                        <View style={styles.minAway}>
                            <Entypo name="back-in-time" size={24} color="#3B82F6" />
                            <Text style={styles.minAwayText}>13 min away</Text>
                        </View>
                    </View>
                    <View style={styles.busItemBottom}>
                        <View style={styles.itemBottomLeft}>
                            <View style={styles.itemBottomLeftIcon}>
                                <FontAwesome5 style={styles.rupee} name="rupee-sign" size={18} color="#fff" />
                            </View>
                            <Text style={styles.busFare}>50</Text>
                        </View>
                        <View style={styles.itemBottomRight}>
                            <View style={styles.itemBottomRightIcon}>
                                <FontAwesome style={styles.crowd} name="group" size={18} color="#fff" />
                            </View>
                            <Text style={styles.seatsOccu}>28%</Text>
                            <Text style={styles.seatsOccuText}>
                                vacant
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.busItem}
                    onPress={() => nav.navigate('BusBoarding')}
                >
                    <View style={styles.busItemTop}>
                        <View style={styles.itemTopLeft}>
                            <Text style={styles.busNumber}>DE 8304</Text>
                            <Text style={styles.busName}>Delhi Bus Co.</Text>
                        </View>
                        <View style={styles.itemTopRight}>
                            <FontAwesome5 name="bus-alt" size={48} color="#3B82F6" />
                        </View>
                    </View>
                    <View style={styles.itemMiddle}>
                        <View style={styles.route}>
                            <MaterialCommunityIcons name="map-marker-path" size={24} color="#3B82F6" style={styles.pathIcon} />
                            <Text style={styles.routeSource}>
                                Rohini
                            </Text>
                            <MaterialIcons name="compare-arrows" size={24} color="#3B82F6" style={styles.routeIcon} />
                            <Text style={styles.routeDest}>
                                Kashmere Gate
                            </Text>
                        </View>
                        <View style={styles.minAway}>
                            <Entypo name="back-in-time" size={24} color="#3B82F6" />
                            <Text style={styles.minAwayText}>3 min away</Text>
                        </View>
                    </View>
                    <View style={styles.busItemBottom}>
                        <View style={styles.itemBottomLeft}>
                            <View style={styles.itemBottomLeftIcon}>
                                <FontAwesome5 style={styles.rupee} name="rupee-sign" size={18} color="#fff" />
                            </View>
                            <Text style={styles.busFare}>100</Text>
                        </View>
                        <View style={styles.itemBottomRight}>
                            <View style={styles.itemBottomRightIcon}>
                                <FontAwesome style={styles.crowd} name="group" size={18} color="#fff" />
                            </View>
                            <Text style={styles.seatsOccu}>56%</Text>
                            <Text style={styles.seatsOccuText}>
                                vacant
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.busItem}
                    onPress={() => nav.navigate('BusBoarding')}
                >
                    <View style={styles.busItemTop}>
                        <View style={styles.itemTopLeft}>
                            <Text style={styles.busNumber}>UP 8296</Text>
                            <Text style={styles.busName}>Delhi Bus Pvt. Ltd.</Text>
                        </View>
                        <View style={styles.itemTopRight}>
                            <FontAwesome5 name="bus-alt" size={48} color="#3B82F6" />
                        </View>
                    </View>
                    <View style={styles.itemMiddle}>
                        <View style={styles.route}>
                            <MaterialCommunityIcons name="map-marker-path" size={24} color="#3B82F6" style={styles.pathIcon} />
                            <Text style={styles.routeSource}>
                                Rohini
                            </Text>
                            <MaterialIcons name="compare-arrows" size={24} color="#3B82F6" style={styles.routeIcon} />
                            <Text style={styles.routeDest}>
                                Muradnagar
                            </Text>
                        </View>
                        <View style={styles.minAway}>
                            <Entypo name="back-in-time" size={24} color="#3B82F6" />
                            <Text style={styles.minAwayText}>30 min away</Text>
                        </View>
                    </View>
                    <View style={styles.busItemBottom}>
                        <View style={styles.itemBottomLeft}>
                            <View style={styles.itemBottomLeftIcon}>
                                <FontAwesome5 style={styles.rupee} name="rupee-sign" size={18} color="#fff" />
                            </View>
                            <Text style={styles.busFare}>120</Text>
                        </View>
                        <View style={styles.itemBottomRight}>
                            <View style={styles.itemBottomRightIcon}>
                                <FontAwesome style={styles.crowd} name="group" size={18} color="#fff" />
                            </View>
                            <Text style={styles.seatsOccu}>96%</Text>
                            <Text style={styles.seatsOccuText}>
                                vacant
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.busItem}
                    onPress={() => nav.navigate('BusBoarding')}
                >
                    <View style={styles.busItemTop}>
                        <View style={styles.itemTopLeft}>
                            <Text style={styles.busNumber}>UP 4269</Text>
                            <Text style={styles.busName}>Delhi Bus Co.</Text>
                        </View>
                        <View style={styles.itemTopRight}>
                            <FontAwesome5 name="bus-alt" size={48} color="#3B82F6" />
                        </View>
                    </View>
                    <View style={styles.itemMiddle}>
                        <View style={styles.route}>
                            <MaterialCommunityIcons name="map-marker-path" size={24} color="#3B82F6" style={styles.pathIcon} />
                            <Text style={styles.routeSource}>
                                Rohini
                            </Text>
                            <MaterialIcons name="compare-arrows" size={24} color="#3B82F6" style={styles.routeIcon} />
                            <Text style={styles.routeDest}>
                                Welcome
                            </Text>
                        </View>
                        <View style={styles.minAway}>
                            <Entypo name="back-in-time" size={24} color="#3B82F6" />
                            <Text style={styles.minAwayText}>10 min away</Text>
                        </View>
                    </View>
                    <View style={styles.busItemBottom}>
                        <View style={styles.itemBottomLeft}>
                            <View style={styles.itemBottomLeftIcon}>
                                <FontAwesome5 style={styles.rupee} name="rupee-sign" size={18} color="#fff" />
                            </View>
                            <Text style={styles.busFare}>60</Text>
                        </View>
                        <View style={styles.itemBottomRight}>
                            <View style={styles.itemBottomRightIcon}>
                                <FontAwesome style={styles.crowd} name="group" size={18} color="#fff" />
                            </View>
                            <Text style={styles.seatsOccu}>82%</Text>
                            <Text style={styles.seatsOccuText}>
                                vacant
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            <StatusBar style="auto" />
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
    heading: {
        marginTop: 20,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        // color: '#2d179b',
    },
    backBtn: {
        padding: 12,
        backgroundColor: '#dbe8ff',
        borderRadius: 50,
    },
    busList: {
        marginVertical: 20,
    },
    busItem: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        padding: 20,
        borderColor: '#dedede',
        borderWidth: 1,
        borderRadius: 30,
        marginBottom: 20,
        // flex: 1,
    },
    busItemTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    busItemBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    itemBottomLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 50,
    },
    itemBottomRight: {
        marginLeft: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 50,
    },
    busFare: {
        fontSize: 24,
        marginHorizontal: 10,
        fontWeight: 'bold',
        // color: '#fff',
    },
    seatsOccu: {
        fontSize: 24,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    seatsOccuText: {
        fontSize: 16,
        marginHorizontal: 8,
        fontWeight: 'bold',
        color: '#94A3B8',
    },
    itemBottomRightIcon: {
        backgroundColor: '#2CD568',
        padding: 10,
        borderRadius: 50,
    },
    itemBottomLeftIcon: {
        backgroundColor: '#ffd800',
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 50,
    },
    rupee: {},
    crowd: {},
    itemTopLeft: {},
    itemTopRight: {
        padding: 20,
        backgroundColor: '#dbe8ff',
        borderRadius: 50,
    },
    itemMiddle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        // justifyContent: 'center',
    },
    route: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        paddingHorizontal: 14,
        paddingVertical: 5,
        backgroundColor: '#dbe8ff',
        borderRadius: 50,
    },
    pathIcon: {
        paddingRight: 10,
    },
    routeIcon: {
        paddingHorizontal: 6,
    },
    minAway: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        paddingVertical: 5,
        paddingHorizontal: 14,
        backgroundColor: '#dbe8ff',
        borderRadius: 50,
    },
    minAwayText: {
        paddingLeft: 10,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#3B82F6',
    },
    busName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#94A3B8',
    },
    busNumber: {
        fontSize: 28,
        // marginVertical: 5,
        fontWeight: 'bold',
        // color: '#3b82f6',
    },
    routeSource: {
        // marginRight: 10,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#3B82F6',
    },
    routeDest: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#3B82F6',
        // marginLeft: 10,
    },
})

export default BusListScreen
