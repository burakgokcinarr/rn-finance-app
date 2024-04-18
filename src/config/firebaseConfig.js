import { initializeApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "xxxxxx",
    authDomain: "xxxxxx",
    projectId: "xxxxx",
    storageBucket: "xxxxx",
    messagingSenderId: "xxxxxx",
    appId: "xxxxxxx"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export {
    auth
}