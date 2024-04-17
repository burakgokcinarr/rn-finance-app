import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Font, Theme } from '../constants'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
// Auth
import { Welcome, SignIn, SignUp } from '../screens/Auth'
// Main
import { TabView } from '../screens/Main'
import { auth } from '../config/firebaseConfig';
import { setAuth } from '../redux/authSlice';

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
        <Stack.Navigator screenOptions={{ gestureEnabled: false, title: '', headerShadowVisible: false }}>
            <Stack.Screen name="welcome" component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name="signin" component={SignIn} options={{ headerShown: true }} />
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

    const dispatch  = useDispatch();
    const isAuth    = useSelector((state) => state.auth.auth);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(setAuth({uid: user.uid, displayName: user.displayName}))
            }
        })
    }, [])

    return (
        <NavigationContainer theme={theme}>
            {
                isAuth ? <MainScreen/> : <AuthScreen/>
            }
        </NavigationContainer>
    )
}