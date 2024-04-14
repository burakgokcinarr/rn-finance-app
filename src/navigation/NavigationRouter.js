import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Font, Theme } from '../constants'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
// Auth
import { Welcome, SignIn, SignUp } from '../screens/Auth'
// Main
import { TabView } from '../screens/Main'

const Stack = createNativeStackNavigator();

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Theme.BG_COLOR,
        primary: Theme.DARK_COLOR
    }
}

const AuthScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
            <Stack.Screen name="welcome" component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name="signin" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="signup" component={SignUp} options={{ headerShown: true, title: "" }} />
        </Stack.Navigator>
    )
}

const MainScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
           <Stack.Screen name="tab" component={TabView} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default function NavigationRouter() {

const isLogIn   = useState(false);

  return (
    <NavigationContainer theme={theme}>
        {
            isLogIn ? <MainScreen/> : <AuthScreen/>
            //<AuthScreen/>
        }
    </NavigationContainer>
  )
}