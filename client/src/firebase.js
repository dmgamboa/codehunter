// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCHhRjIviq8a0MqGdUUvgB0XUneaHCbrO8",
    authDomain: "codehunter-7a2b4.firebaseapp.com",
    projectId: "codehunter-7a2b4",
    storageBucket: "codehunter-7a2b4.appspot.com",
    messagingSenderId: "228856337764",
    appId: "1:228856337764:web:43b9139cb373574bd95671",
    measurementId: "G-6CEK3N9EXT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Create the Firestore database object and Firebase Auth object.
// Henceforce, any reference to the database can be made with "db",
// any reference to auth can be made with "auth"
const auth = firebase.auth();
const db = firebase.firestore();

auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(function () {
    return firebase.auth().signInWithEmailAndPassword(email, password);
}).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
});
