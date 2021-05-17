import React, { useContext, useState } from "react";
import { auth } from "../firebase";

// Create context object
const Auth = React.createContext();

export function useAuth() {
    return useContext(Auth);
};

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();

    const getUserUID = () => {
        auth.onAuthStateChanged(token => {
            if (token) {
                setCurrentUser(token);
                console.log("token uid ", token.uid, " token: ", token);
                return token;
            } else {
                return "no uid";
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

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    };

    function logout() {
        return auth.signOut();
    };

    const value = {
        currentUser,
        signup,
        login,
        logout,
        getUserUID
    };

    return (
        // Email, Facebook, Apple, Twitter
        <Auth.Provider value={value}>
            { children }
        </Auth.Provider>
    );
};

export default AuthProvider;