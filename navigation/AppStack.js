import React from 'react';
import { View, Text, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ContactFormScreen from '../screens/ContactFormScreen';
import GetDataScreen from '../screens/GetDataScreen';
import ReviewDetailsScreen from '../screens/ReviewDetailsScreen';
import ViewContactForm from '../screens/ViewContactForm';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppStack = () => {
    return(
        <Stack.Navigator screenOptions={{
            headerStyle:{
                backgroundColor: '#0782f9'
            },
            // headerShown:false,
            headerTintColor: '#fff',
            headerTitleStyle: 'bold'
        }}>
            <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ 
                headerTitleAlign: 'center',
                title: 'Welcome to Scolarship App!', }} /> 
            <Stack.Screen 
            name="ContactForm" 
            component={ContactFormScreen}
            options={{ 
                headerTitleAlign: 'center',
                title: 'Scolarship Form', }} />
            <Stack.Screen 
            name="GetData" 
            component={GetDataScreen}
            options={{ 
                headerTitleAlign: 'center',
                title: 'All Books', }} />  
            <Stack.Screen
            name="ReviewDetails" 
            component={ReviewDetailsScreen}
            options={{ 
                headerTitleAlign: 'center',
                title: 'Review All Books Details', }} />
            <Stack.Screen
            name="ViewContactForm" 
            component={ViewContactForm}
            options={{ 
                headerTitleAlign: 'center',
                title: 'View Contact Form Details', }} />  
        </Stack.Navigator>

        // <Tab.Navigator screenOptions={{
        //         headerStyle:{
        //             backgroundColor: '#009387',
        //         },
        //         headerTintColor: '#fff',
        //         headerTitleStyle: 'bold'
        //     }}>
        //     <Tab.Screen name="RN Social" 
        //     component={HomeScreen}
        //     options={{ 
        //         headerTitleAlign: 'center',
        //         tabBarLabel: 'Home' }} />

        //     <Tab.Screen name="Login" 
        //     component={LoginScreen}
        //     options={{ 
        //         headerTitleAlign: 'center',
        //         tabBarLabel: 'Login' }} />
        // </Tab.Navigator>
    );
}

export default AppStack;