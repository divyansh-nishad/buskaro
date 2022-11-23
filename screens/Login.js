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


const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const pressLogin = () => {
        if (!password.length || !email.length)
            return Alert.alert("Warning !!", "Please fill all fields")
        navigation.navigate('Home')
    }
    return (

        <>
            <StatusBar backgroundColor="#3B3486" />
            <View style={styles.container}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../images/Login.png')}
                />
                <View style={styles.heading}>
                    <Text style={styles.headingText}>Login</Text>
                </View>
                <View style={styles.form}>
                    <TextInput style={styles.input} placeholder="email" onChangeText={(text) => setEmail(text)}></TextInput>
                </View>

                <View style={styles.form}>
                    <TextInput style={styles.input} placeholder="passowrd" onChangeText={(text) => setPassword(text)}></TextInput>
                </View>
                <TouchableOpacity style={styles.button} onPress={pressLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.lastText}>
                    {' '}
                    Don't have an account?
                    <TouchableOpacity style={styles.signup}>
                        <Text
                            style={styles.signUpText}
                            onPress={() => navigation.navigate('Register')}>
                            Signup
                        </Text>
                    </TouchableOpacity>{' '}
                </Text>
            </View>
        </>
    );
};

export default Login;
const styles = StyleSheet.create({
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
    container: {
        flex: 1,
    },
    signup: {
        marginTop: 5,
        marginLeft: 12,
    },
    input: {
        borderBottomWidth: 1,
        width: 350,
        alignSelf: 'center',
        borderRadius: 20,
        alignText: 'center',
    },
    form: {
        margin: 20,
    },
    headingText: {
        fontSize: 45,
        fontWeight: '900',
        marginLeft: 20,
    },
    tinyLogo: {
        alignSelf: 'center',
        height: 320,
        width: 320,
        marginTop: 60,
    },
    button: {
        backgroundColor: '#3B3486',
        width: 350,
        alignSelf: 'center',
        borderRadius: 20,
        margin: 10,
    },
    buttonText: {
        padding: 15,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },
})