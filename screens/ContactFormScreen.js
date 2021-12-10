import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList, ScrollView } from 'react-native'


const ContactFormScreen = ({navigation}) => {
    const [author, setAuthor] = useState('')
    const [first_sentence, setFirstSentence] = useState('')
    const [published, setPublished] = useState('')
    const [title, setTitle] = useState('')
    // const [data, setData] = useState([])


    // post API: to add data in JSON format to API
    const handelSubmit = async () => {
        // alert("hiiii")
        console.warn({author, first_sentence, published, title})
        let data = {author, first_sentence, published, title}
        fetch('http://192.168.0.21:4000/api/book', {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        }).then((result)=>{
            // console.warn('Result is', result)
            result.json().then((resp)=>{
                alert('Books Data added')
                navigation.navigate('GetData')
                // console.warn('Response is: ', resp)
            })
        })
    }
   
    


    
    
    return (
        <ScrollView contentContainerStyle={styles.scrollcontainer}>
            <View style={styles.container}>
                {/* <Text style={styles.text}>Fill your Scolarship Form</Text> */}
                
                <View style={styles.formContainer}>
                    <TextInput style={styles.textInput}
                        placeholder="Author Name"
                        placeholderTextColor="gray"
                        value={author}
                        onChangeText={(val) => setAuthor(val)} /> 
                    <TextInput style={styles.textInput}
                        placeholder="Sentence"
                        placeholderTextColor="gray"
                        value={first_sentence}
                        onChangeText={(val) => setFirstSentence(val)} /> 
                    <TextInput style={styles.textInput}
                        placeholder="your title"
                        placeholderTextColor="gray"
                        value={title}
                        onChangeText={(val) => setTitle(val)} />  
                    <TextInput style={styles.textInput}
                        placeholder="published year"
                        placeholderTextColor="gray"
                        value={published}
                        onChangeText={(val) => setPublished(val)} />


                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                        onPress={handelSubmit}
                        style={styles.button}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        style={styles.button}>
                            <Text style={styles.buttonText}>Go Back</Text>
                        </TouchableOpacity>
                    
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default ContactFormScreen

const styles = StyleSheet.create({
    scrollcontainer: {
        width: '100%'
    },
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: '700',
    },
    formContainer: {
        width: '100%',
        backgroundColor: '#c0cbc0',
        // marginTop: 30,
        paddingVertical: 30,
        paddingHorizontal: 20

    },
    textInput: {
        backgroundColor: '#fff',
        borderColor: '#eeee',
        borderWidth: 2,
        borderRadius: 10,
        height: 50,
        paddingLeft: 10,
        // textAlign: 'center',
        marginTop: 20,
        color: '#333'
    },
    buttonContainer: {
        display: 'flex',
    },
    button: {
        backgroundColor: '#0782f9',
        width: '80%',
        padding: 15,
        marginTop: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
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
