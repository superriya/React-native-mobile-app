import React, {useEffect, useState} from 'react';
import { View, Text, Button } from 'react-native';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from '../screens/SignupScreen';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ContactFormScreen from '../screens/ContactFormScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName;
    // AsyncStorage 
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
        if (value == null) {
          AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
          setIsFirstLaunch(true);
        } else {
          setIsFirstLaunch(false);
        }
      }); 
  
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '213089819460-kkqc3b54fpnr7131kuofddtp6j5nc527.apps.googleusercontent.com',
            });
    }, []);

    if (isFirstLaunch === null) {
        return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
      } else if (isFirstLaunch == true) {
        routeName = 'Onboarding';
      } else {
        routeName = 'Login';
      }
    
    return(
        <Stack.Navigator 
        initialRouteName={routeName}
        screenOptions={{
            headerStyle:{
                backgroundColor: '#0782f9',
            },
            headerTintColor: '#fff',
            headerTitleStyle: 'bold'
        }}>
            <Stack.Screen 
            name="Onboarding" 
            component={OnboardingScreen}
            options={{ title: 'Overview' }} />
            
            <Stack.Screen 
            name="Login" 
            component={LoginScreen}
            options={{ title: 'Login' }} />

            <Stack.Screen 
            name="Signup" 
            component={SignupScreen}
            options={{ title: 'Signup' }} />
 
        </Stack.Navigator>
    );
}

export default AuthStack;