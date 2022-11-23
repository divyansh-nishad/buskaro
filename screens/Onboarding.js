import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
const Onboarding = () => {
    return (
        <Swiper style={styles.wrapper} showsButtons={true}>
            <View style={styles.slide1}>

                <Image source={require('../images/BUS.png')} style={{ height: 400, width: 400, alignSelf: 'center', padding: 30 }} />
                <View style={{ padding: 30, justifyContent: 'center', alignItems: 'center', }}>

                    <Text style={{ fontSize: 30, color: 'black', fontWeight: '900' }}>Bus Tracking</Text>

                    <Text style={{ marginTop: 10, marginLeft: 15, fontSize: 15, color: 'black', fontWeight: '400' }}>Buskaro helps you to track the location of your bus, which saves your time</Text>
                </View>

                <TouchableOpacity style={{ backgroundColor: '#B9E0FF', justifyContent: 'center', alignItems: 'center', borderRadius: 15, marginTop: 10 }}>
                    <Text style={{ padding: 15, width: 250, textAlign: 'center', color: 'black', fontWeight: '700', fontSize: 20 }}>Skip</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.slide2}>
                <Image source={require('../images/busImage.png')} style={{ height: 400, width: 400, alignSelf: 'center' }} />
                <View style={{ padding: 30, justifyContent: 'center', alignItems: 'center', }}>

                    <Text style={{ fontSize: 30, color: 'black', fontWeight: '900' }}>Seat Occupancy</Text>

                    <Text style={{ marginTop: 20, marginLeft: 15, fontSize: 15, color: 'black', fontWeight: '400' }}>Buskaro helps you to track the seat occupancy by real time monitoring of the seats available</Text>
                </View>

                <TouchableOpacity style={{ backgroundColor: '#B9E0FF', justifyContent: 'center', alignItems: 'center', borderRadius: 15, marginTop: 10 }}>
                    <Text style={{ padding: 15, width: 250, textAlign: 'center', color: 'black', fontWeight: '700', fontSize: 20 }}>Skip</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.slide3}>
                <Image source={require('../images/help.png')} style={{ height: 400, width: 400, alignSelf: 'center' }} />
                <View style={{ padding: 30, justifyContent: 'center', alignItems: 'center', }}>

                    <Text style={{ fontSize: 30, color: 'black', fontWeight: '900' }}>Emergency Calling</Text>

                    <Text style={{ marginTop: 20, marginLeft: 15, fontSize: 15, color: 'black', fontWeight: '400' }}>Buskaro </Text>
                </View>

                <TouchableOpacity style={{ backgroundColor: '#B9E0FF', justifyContent: 'center', alignItems: 'center', borderRadius: 15, marginTop: 10 }}>
                    <Text style={{ padding: 15, width: 250, textAlign: 'center', color: 'black', fontWeight: '700', fontSize: 20 }}>Skip</Text>
                </TouchableOpacity>

            </View>
        </Swiper>
    )
}

export default Onboarding;
const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'white'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})