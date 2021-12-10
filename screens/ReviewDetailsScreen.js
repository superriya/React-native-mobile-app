import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const ReviewDetailsScreen = ({ navigation, route}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}><Text style={styles.text2}>Author Name: </Text>{route.params.author}</Text>
            <Text style={styles.text}><Text style={styles.text2}>Title: </Text>{route.params.title}</Text>
            <Text style={styles.text}><Text style={styles.text2}>Description: </Text>{route.params.first_sentence}</Text>
            <Text style={styles.text}><Text style={styles.text2}>Published Year: </Text>{route.params.published}</Text>

            <TouchableOpacity 
            onPress={() => navigation.navigate('ContactForm')}
            style={styles.button}>
                <Text style={styles.buttonText}>Add More Data</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ReviewDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        padding: 20
    },
    text: {
        fontSize: 20,
        // textAlign: 'center',
        fontWeight: '400',
        marginBottom: 10
    },
    text2: {
        fontSize: 20,
        fontWeight: '800',
        // marginBottom: 10
    },
    button: {
        backgroundColor: '#0782f9',
        width: '50%',
        padding: 15,
        marginTop: 20,
        borderRadius: 10,
        alignItems: 'center',
        // marginLeft: 'auto',
        // marginRight: 'auto'
        // justifyContent: 'center's
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
        textTransform: 'uppercase',
        letterSpacing: .5
    }
})
