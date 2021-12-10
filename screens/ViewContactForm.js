import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const ViewContactForm = ({route}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Contact form</Text>
            {/* <TextInput style={styles.textInput}
                placeholder={route.param.data}
                placeholderTextColor="gray" />  */}
        </View>
    )
}

export default ViewContactForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: '700',
    }
})
