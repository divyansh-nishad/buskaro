import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const JourneyInfo = () => {
    const nav = useNavigation()
    useLayoutEffect(() => {
        nav.setOptions({
            headerShown: false,
        })
    }, [nav])
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => nav.navigate('Home')}
        >
            <Text>Destination Reached</Text>
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

export default JourneyInfo
