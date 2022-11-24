import {
    View,
    Text,
    StyleSheet,
    Image,
    StatusBar,
    TextInput,
    TouchableOpacity, Alert
} from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'moti';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const pressLogin = () => {
        if (!password.length || !email.length)
            return Alert.alert("Warning !!", "Please fill all fields")
        navigation.navigate('Home')
    }
    return (
        <ScrollView style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('../assets/images/login.png')}
            />
            <View style={styles.heading}>
                <Text style={styles.headingText}>Login</Text>
            </View>
            <View style={styles.form}>
                <MaterialCommunityIcons style={styles.icon} name="email" size={32} color="#94A3B8" />
                <TextInput
                    style={styles.input}
                    placeholder="email@example.com"
                    placeholderTextColor={'#94A3B8'}
                    onChangeText={(text) => setEmail(text)}
                >
                </TextInput>
            </View>

            <View style={styles.form}>
                <FontAwesome5 name="key" style={styles.icon} size={32} color="#94A3B8" />
                <TextInput
                    style={styles.input}
                    placeholder="password"
                    placeholderTextColor={'#94A3B8'}
                    onChangeText={(text) => setPassword(text)}
                >
                </TextInput>
            </View>
            <TouchableOpacity style={styles.button} onPress={pressLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.last}>
                <Text style={styles.lastText}>
                    Don't have an account?
                </Text>
                <TouchableOpacity style={styles.signup}>
                    <Text
                        style={styles.signUpText}
                        onPress={() => navigation.navigate('Register')}>
                        Signup
                    </Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        // justifyContent: 'space-between',
        height: '100%',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: '#fff'
    },
    heading: {

    },
    signUpText: {
        color: 'blue',
    },
    lastText: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    status: {
        height: 200,
    },
    // container: {
    //     flex: 1,
    // },
    signup: {
        marginTop: 5,
        marginLeft: 12,
    },
    input: {
        // borderBottomWidth: 1,
        // width: 350,
        // alignSelf: 'center',
        // borderRadius: 20,
        // alignText: 'center',
        fontSize: 20,
        paddingLeft: 10,
    },
    form: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#dee3ea',
        borderWidth: 1,
        borderRadius: 50,
        marginVertical: 10,
    },
    icon: {
        padding: 12,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
    },
    headingText: {
        fontSize: 34,
        fontWeight: '900',
        marginBottom: 20,
        textAlign: 'center',
    },
    tinyLogo: {
        alignSelf: 'center',
        height: 400,
        width: 400,
        marginTop: 20,
    },
    button: {
        backgroundColor: '#3B82F6',
        padding: 12,
        borderRadius: 50,
        marginVertical: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    last: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'blue',
    },
    lastText: {
        fontSize: 18,
        color: '#94A3B8',
    },
    signUpText: {
        fontSize: 18,
        color: '#3B82F6',
    },
})

export default Login;
