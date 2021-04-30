import firebase from 'firebase/app';
import 'firebase/auth';

// The Firebase configuration.
const app = firebase.initializeApp({
    apiKey: "AIzaSyCHhRjIviq8a0MqGdUUvgB0XUneaHCbrO8",
    authDomain: "codehunter-7a2b4.firebaseapp.com",
    projectId: "codehunter-7a2b4",
    storageBucket: "codehunter-7a2b4.appspot.com",
    messagingSenderId: "228856337764",
    appId: "1:228856337764:web:43b9139cb373574bd95671",
    measurementId: "G-6CEK3N9EXT"
})

//analytics();
//const db = firebase.firestore();

export const auth = app.auth()
export default app
