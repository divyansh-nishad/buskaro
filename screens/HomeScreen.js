import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useLayoutEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"

const HomeScreen = () => {
    const nav = useNavigation()
    const [location, setLocation] = useState();
    const [errorMsg, setErrorMsg] = useState();
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()
    const [destinationName, setDestinationName] = useState('')

    const searchDestination = () => {
        if (destinationName) {
            nav.navigate('BusList', { latitude, longitude, destinationName })
            setDestinationName('')
        }
        else {
            Alert.alert("Warning", 'Please enter a destination')
        }
    }

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
        const getLocation = async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            const location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            setLatitude(location.coords.latitude)
            setLongitude(location.coords.longitude)
        }
        getLocation()
    }, []);

    useLayoutEffect(() => {
        nav.setOptions({
            headerShown: false,
        })
    }, [nav])

    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <TouchableOpacity style={styles.userInfo}>
                    <Image source={require('../assets/images/user.jpg')}
                        style={styles.userPhoto} />
                    <Text style={styles.userName}>
                        @username
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settings}>
                    <TouchableOpacity style={styles.settingsBtn}>
                        <AntDesign name="setting" size={28} color="#0EA5E9" />
                    </TouchableOpacity>
                    <Text style={styles.settingsText}>Settings</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.heading}>
                <Text style={styles.header}>
                    Search for Buses Nearby!
                </Text>
            </View>
            <View style={styles.mapBox}>
                {/* <GooglePlacesAutocomplete
                    placeholder="Search"
                    fetchDetails={true}
                    GooglePlacesSearchQuery={{
                        rankby: "distance"
                    }}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        // console.log(data, details)
                        // setRegion({
                        //     latitude: details.geometry.location.lat,
                        //     longitude: details.geometry.location.lng,
                        //     latitudeDelta: 0.0922,
                        //     longitudeDelta: 0.0421
                        // })
                    }}
                    query={{
                        key: "KEY",
                        language: "en",
                        components: "country:in",
                        types: "establishment",
                        radius: 30000,
                        location: `${latitude}, ${longitude}`
                    }}
                    styles={{
                        container: { flex: 0, position: "absolute", width: "100%", zIndex: 1 },
                        listView: { backgroundColor: "white" }
                    }}
                /> */}
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

                    {/* <Marker
                        coordinate={{
                            latitude: latitude,
                            longitude: longitude,
                        }}
                        title="You are here!"
                    // pinColor="#2d179b"
                    /> */}
                </MapView>
            </View>
            <View style={styles.destinationContainer}>
                <View style={styles.destinationBox}>
                    <View style={styles.destinationIcon}>
                        <Ionicons name="ios-location-outline" size={32} color="#94A3B8" />
                    </View>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your destination"
                            placeholderTextColor={'#94A3B8'}
                            onChangeText={text => setDestinationName(text)}
                        />
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.searchBtn}
                    onPress={() => {
                        searchDestination()
                    }}
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
        backgroundColor: '#fff'
    },
    heading: {
        // marginVertical: 10,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        // color: '#2d179b',
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
        borderRadius: 50,
    },
    userName: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    settings: {
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 2,
        // borderColor: '#39397c',
        borderRadius: 50,
        padding: 5,
        backgroundColor: '#eaf8ff',
    },
    settingsBtn: {
        padding: 8,
        // backgroundColor: '#2F293F',
        borderRadius: 50,
    },
    settingsText: {
        marginLeft: 5,
        marginRight: 10,
        fontSize: 18,
        color: '#2596D0',
        fontWeight: 'bold',
    },
    mapBox: {
        height: '70%',
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
        borderColor: '#dee3ea',
        borderWidth: 1,
        borderRadius: 50,
    },
    destinationIcon: {
        // backgroundColor: '#000',
        padding: 12,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        // borderRadius: 50,
    },
    inputBox: {
        paddingLeft: 10,
    },
    input: {
        fontSize: 20,
    },
    searchBtn: {
        backgroundColor: '#3B82F6',
        padding: 12,
        borderRadius: 50,
        marginTop: 20,
    },
    searchBtnText: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
    },
})

export default HomeScreen
