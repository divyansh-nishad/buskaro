import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import MapView from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
    const nav = useNavigation()

    useLayoutEffect(() => {
        nav.setOptions({
            // headerTitle: 'Home',
            // headerTitleAlign: 'center',
            headerShown: false,
        })
    }, [nav])

    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <View style={styles.userInfo}>
                    <Image source={require('../assets/icon.png')}
                        style={styles.userPhoto} />
                    <Text style={styles.userName}>@username</Text>
                </View>
                <TouchableOpacity style={styles.settingsBtn}>
                    <AntDesign name="setting" size={28} color="#2d179b" />
                </TouchableOpacity>
            </View>
            <View style={styles.mapBox}>
                <MapView style={styles.map} />
            </View>
            <View style={styles.destinationContainer}>
                <View style={styles.destinationBox}>
                    <View style={styles.destinationIcon}>
                        <Ionicons name="ios-location-outline" size={28} color="#2d179b" />
                    </View>
                    <View style={styles.inputBox}>
                        <TextInput style={styles.input} placeholder="Enter your destination" />
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.searchBtn}
                    onPress={() => nav.navigate('BusList')}
                >
                    <Text style={styles.searchBtnText}>Search</Text>
                </TouchableOpacity>
            </View>
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
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userPhoto: {
        height: 50,
        width: 50,
    },
    userName: {
        marginLeft: 10,
        fontSize: 20,
    },
    settingsBtn: {
        padding: 12,
        backgroundColor: '#e1dbff',
        borderRadius: 10,
    },
    mapBox: {
        height: '80%',
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
    destinationBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#dedede',
        borderWidth: 1,
        borderRadius: 10,
    },
    destinationIcon: {
        backgroundColor: '#e1dbff',
        padding: 12,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    inputBox: {
        paddingLeft: 10,
    },
    input: {
        fontSize: 20,
    },
    searchBtn: {
        backgroundColor: '#2d179b',
        padding: 12,
        borderRadius: 10,
        marginTop: 20,
    },
    searchBtnText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
    },
})

export default HomeScreen
