import React, { useContext, useState } from "react";
import { auth } from "../firebase";

// Create context object
const Auth = React.createContext();

export const useAuth = () => {
    return useContext(Auth);
};

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [userPoints, setUserPoints] = useState();

    const getUser = () => {
        if (localStorage.getItem("uid")) {
            return localStorage.getItem("uid");
        } else {
            return;
        }
    };

    const getUID = () => {
        auth.onAuthStateChanged(token => {
            if (token) {
                setCurrentUser(token);
                return token;
            } else {
                localStorage.removeItem("uid");
                return "UID unavailable";
            }
        });
    };

    // Creating new user in firebase and returns uid to create doc in user collection.
    // Set the currentUser as a token accessed from creating an account
    // Return the uid
    const signup = async (email, password) => {
        const userCredentials = await auth.createUserWithEmailAndPassword(email, password);
        // token to be set as currentUser
        const userData = userCredentials.user;
        setCurrentUser(userData);
        
        const uid = userCredentials.user.uid;

        return uid;
    };

    const login = async (email, password) => {
        const userCredentials = await auth.signInWithEmailAndPassword(email, password); 
        const userData = userCredentials.user;
        localStorage.setItem("uid", userData.uid);
        setCurrentUser(userData);
        return userData;
    };

    function logout() {
        return auth.signOut();
    };

    const value = {
        currentUser,
        signup,
        login,
        logout,
        getUID,
        getUser,
        userPoints,
        setUserPoints
    };

    return (
        // Email, Facebook, Apple, Twitter
        <Auth.Provider value={value}>
            { children }
        </Auth.Provider>
    );
};

export default AuthProvider;