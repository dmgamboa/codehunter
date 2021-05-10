import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

// Create context object
const Auth = React.createContext();

export function useAuth() {
    return useContext(Auth);
};

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();

    const getUserUID = () => {
        if (currentUser) {
            console.log("token or naw ", currentUser);
            return currentUser.uid;
        } else {
            return "no uid";
        }
    };

    // Creating new user in firebase and document in user collection in MongoDB
    const signup = (email, password) => {
        console.log("signup() executed for firebase");
        return auth.createUserWithEmailAndPassword(email, password);
    };

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    };

    function logout() {
        return auth.signOut();
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(token => {
            setCurrentUser(token);
        });
        // Unsubscribe from the listener onAuthStateChanged
        return unsubscribe;
    }, []);

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