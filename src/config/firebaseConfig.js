import { initializeApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyDLqzTiNnTcLcUdUtm5YGBFOHRwS_4Uk5M",
    authDomain: "rn-expo-finance-app.firebaseapp.com",
    projectId: "rn-expo-finance-app",
    storageBucket: "rn-expo-finance-app.appspot.com",
    messagingSenderId: "1043738037357",
    appId: "1:1043738037357:web:49f0917f2ef8baa00f4364"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export {
    auth
}