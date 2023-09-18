import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBxVjm5S66NUB6gEi2gIjamzGNVThM0SUM",
  authDomain: "habari-a69bd.firebaseapp.com",
  projectId: "habari-a69bd",
  storageBucket: "habari-a69bd.appspot.com",
  messagingSenderId: "455516486984",
  appId: "1:455516486984:web:f8a5e90238a6a0637f077d",
};
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
