import React, { useContext, useState } from "react";
import { auth } from "../firebase";

const Auth = React.createContext();

export const useAuth = () => {
    return useContext(Auth);
};

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState();

    const getUser = () => {
        if (localStorage.getItem("user")) {
            return localStorage.getItem("user");
        } else {
            return;
        }
    };

    // Creating new user in firebase and returns uid to create doc in user collection.
    // Set the currentUser as a token accessed from creating an account
    // Return the uid
    const signup = async (email, password) => {
        await auth.createUserWithEmailAndPassword(email, password).then((token) => {
            localStorage.setItem("user", JSON.stringify(token.user));
        });
    };

    const login = async (email, password) => {
        await auth.signInWithEmailAndPassword(email, password).then((token) => {
            localStorage.setItem("user", JSON.stringify(token.user));
        });
    };

    const logout = () => {
        localStorage.removeItem("user");
        return auth.signOut();
    };

    const value = {
        signup,
        login,
        logout,
        getUser,
        userData,
        setUserData,
    };

    return (
        // Email, Facebook, Apple, Twitter
        <Auth.Provider value={value}>
            { children }
        </Auth.Provider>
    );
};

export default AuthProvider;