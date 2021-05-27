import React, { useContext } from "react";
import { auth } from "../firebase";
import axios from "axios";

const Auth = React.createContext();
const url = process.env.REACT_APP_SERVER;

export const useAuth = () => {
    return useContext(Auth);
};

const AuthProvider = ({ children }) => {
    const getUser = () => {
        if (localStorage.getItem("user")) {
            return localStorage.getItem("user");
        }

        return;
    };

    const getUserData = () => {
        if (localStorage.getItem("userData")) {
            return JSON.parse(localStorage.getItem("userData"));
        }
        
        return;
    };

    const setUserData = async () => {
        const userToken = getUser();
        const userData = await axios.get(`${url}readUser`, {
            params: {
                userToken,
                fields: "avatar points name username",
            },
        });

        localStorage.setItem("userData", JSON.stringify(userData.data));
    };

    // Creating new user in firebase and returns uid to create doc in user collection.
    // Set the user credentials in localStorage
    const signup = async (email, password) => {
        await auth.createUserWithEmailAndPassword(email, password).then((token) => {
            localStorage.setItem("user", JSON.stringify(token.user));
        });
    };

    const login = async (email, password) => {
        await auth.signInWithEmailAndPassword(email, password).then((token) => {
            localStorage.setItem("user", JSON.stringify(token.user));
        });

        await setUserData();
    };

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("userData");
        return auth.signOut();
    };

    const value = {
        signup,
        login,
        logout,
        getUser,
        getUserData,
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