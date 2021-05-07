// Firebase credentials
import firebase from "firebase/app";
import "firebase/auth";

// The Firebase configuration.
const app = firebase.initializeApp({
    apiKey: "AIzaSyCHhRjIviq8a0MqGdUUvgB0XUneaHCbrO8",
    authDomain: "codehunter-7a2b4.firebaseapp.com",
    projectId: "codehunter-7a2b4",
    storageBucket: "codehunter-7a2b4.appspot.com",
    messagingSenderId: "228856337764",
    appId: "1:228856337764:web:43b9139cb373574bd95671",
    measurementId: "G-6CEK3N9EXT"
});

//analytics();


// import firebase from 'firebase';
// var firebaseui = require('firebaseui');
const auth = app.auth()

// const firebaseUI = () => {
//     // Initialize the FirebaseUI Widget using Firebase.
//     // var ui = new firebaseui.auth.AuthUI(auth);
//     let ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

//     let uiConfig = {
//         // callbacks: {
//         //     signInSuccessWithAuthResult: async (authResult, redirectUrl) => {
//         //         return true;
//         //     },
//         //     uiShown: function () {
//         //         document.getElementById('loader').style.display = 'none';
//         //     }
//         // },
//         // signInSuccessUrl: '../../sign-up-success.html',
//         signInFlow: 'popup',
//         signInOptions: [
//             firebase.auth.EmailAuthProvider.PROVIDER_ID,
//             firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//             firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//         ],
//         // tosUrl: '<your-tos-url>',
//         // privacyPolicyUrl: '<your-privacy-policy-url>'
//     };

//     // first param is a container in html 
//     ui.start('#root', uiConfig);
// }



// export { auth, firebaseUI }
export { auth }
export default app
