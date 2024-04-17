import React, { useCallback, useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FontLoader } from './src/config/FontLoader';
import NavigationRouter from './src/navigation/NavigationRouter';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux'
import { store } from './src/redux/store';

SplashScreen.preventAutoHideAsync();

export default function App() {
  
  const [appIsReady, setAppIsReady] = useState(false); 

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(FontLoader);
        await new Promise(resolve => setTimeout(resolve, 2500));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{flex: 1}} onLayout={onLayoutRootView}>
      <Provider store={store}>
        <NavigationRouter/>
      </Provider>
    </View>
  );
}
