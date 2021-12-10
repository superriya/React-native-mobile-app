import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native'

const GetDataScreen = ({navigation}) => {
    const [data, setData] = useState([])

    // get API data 
    useEffect( ()=> {
        loadBookData()
    },[])

    async function loadBookData() {
        const api = 'http://192.168.0.21:4000/api/books/all'
        const result = await fetch(api)
        const getResult = await result.json()
        setData(getResult)
        console.warn("Get Book Data", getResult)
    }

    // Delete item by id with the help of API
    const onDelete = async (id) => {
        // alert("Hi, I'm going to delete!")
        // alert("ID is " + id)
        let result = await fetch('http://192.168.0.21:4000/api/book/delete/'+id,{
            method: 'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })   
        result = await result.json();
        console.warn('Deleted!' + result)  
        loadBookData()
    } 

    // renderItem in FlatList
    const renderItem = ({item}) => {
        return(
            <View style={styles.flatlist}>
                <TouchableOpacity
                onPress={() => navigation.navigate('ReviewDetails', item)} >
                    <Text>{item.title}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteBtn}
                onPress={() => onDelete(item.id)} >
                    <Text style={{color:'#ffffff'}}>Delete</Text>
                </TouchableOpacity>
            </View>
        )
    }
    // renderItem in FlatList End


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Get Books Data</Text>
            <FlatList 
            keyExtractor={(item) => item.id}
            data={data.bookdata}
            renderItem={renderItem} />
        </View>
    )
}

export default GetDataScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        padding: 20
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '700',
        marginBottom: 30
    },
    flatlist: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#c0cbc0',
        marginBottom: 16,
        padding: 10,
        borderRadius: 8
    },
    deleteBtn: {
        backgroundColor: '#037272',
        padding: 10,
        borderRadius: 8
    }
})
