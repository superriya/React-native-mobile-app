import React, {useContext, useState} from "react";
import{View,Text, Button, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import FormButton from "../components/FormButton";
import { AuthContext } from "../navigation/AuthProvider";


const HomeScreen = ({navigation}) => {
    const {user,logout} = useContext(AuthContext);
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.inputContainer}>
                <Image source={require('../assets/scholarship-logo.png')}
                style={styles.logo} />
                <Text style={styles.text}>Hello, {user.email}</Text>
                {/* <FormButton 
                buttonTitle="Logout"
                onPress={() => logout()} /> */}
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('GetData')}
                style={styles.button}>
                    <Text style={styles.buttonText}>Get Data</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => navigation.navigate('ContactForm')}
                style={styles.button}>
                    <Text style={styles.buttonText}>Create Data</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => logout()}
                style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        
      );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        marginTop: 30,
        fontSize: 20,
        color: '#333333'
    },
    buttonContainer: {
        width: '60%',
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 40
    },
    button: {
        backgroundColor: '#0782f9',
        width: '100%',
        marginBottom: 10,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16
    },
    buttonOutline: {
        backgroundColor: '#fff', 
        marginTop: 5,
        borderColor: '#0782f9',
        borderWidth: 2
    },
    buttonOutlineText: {
        color: '#0782f9',
        fontWeight: '700',
        fontSize: 16
    },
    logo: {
        height: 200,
        width: 200,
        resizeMode: 'cover'

    },
});