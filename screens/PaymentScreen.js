import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { Component, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
// import Animated, {
//     useSharedValue,
//     withTiming,
//     useAnimatedStyle,
//     Easing,
// } from 'react-native-reanimated';
// App.js
import { Easing } from 'react-native-reanimated'
import { MotiView } from 'moti'
import { Entypo } from '@expo/vector-icons';
// import Easing from 'react-native/Libraries/Animated/Easing'

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
            <View style={styles.top}>
                <View style={styles.circle}>
                    {[...Array(3).keys()].map((index) => {
                        return (
                            <MotiView
                                from={{
                                    opacity: 0.7,
                                    scale: 1
                                }}
                                animate={{
                                    opacity: 0,
                                    scale: 4
                                }}
                                transition={{
                                    type: 'timing',
                                    duration: 2000,
                                    easing: Easing.out(Easing.ease),
                                    delay: 400 * index,
                                    repeatReverse: false,
                                    loop: true,
                                }}
                                key={index}
                                style={[StyleSheet.absoluteFill, styles.circle]}
                            />
                        )
                    })}
                    <Entypo name="check" size={64} color="#fff" />
                </View>
            </View>
            <View style={styles.bottom}>
                <View style={styles.textBox}>
                    <Text style={styles.text}>Payment Success</Text>
                </View>
            </View>
            <StatusBar style="auto" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',

    },
    top: {
        height: '80%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        padding: 20,
        backgroundColor: '#3B82F6',
        borderRadius: 100,
    },
    bottom: {
        height: '20%',
        // width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBox: {
        backgroundColor: '#f7f7f7',
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 50,
    },
    text: {
        color: '#94A3B8',
        fontSize: 18,
    },
})

export default PaymentScreen
