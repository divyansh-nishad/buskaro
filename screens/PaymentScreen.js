import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { Component, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const PaymentScreen = () => {
    const nav = useNavigation()
    useLayoutEffect(() => {
        nav.setOptions({
            headerShown: false,
        })
    }, [nav])
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => nav.navigate('BusJourney')}
        >
            <Text>PaymentScreen</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default PaymentScreen
