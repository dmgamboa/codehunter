import React, { useContext, useState } from "react";
import { auth } from "../firebase";

// Create context object
const Auth = React.createContext();

export function useAuth() {
    return useContext(Auth);
};

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();

    const getUser = () => {
        if (currentUser) {
            return currentUser;
        } else {
            return "User unavailable";
        }
    };

    const getUID = () => {
        auth.onAuthStateChanged(token => {
            if (token) {
                setCurrentUser(token);
                return token;
            } else {
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
        setCurrentUser(userData);
        return userCredentials;
    };

    function logout() {
        return auth.signOut();
    };

<<<<<<< HEAD
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(token => {
            setCurrentUser(token);
        });
        // Unsubscribe from the listener onAuthStateChanged
        return unsubscribe;
    }, []);

=======
>>>>>>> 07e7eb60c287a6dae2656b1b15c874ad1b778f55
    const value = {
        currentUser,
        signup,
        login,
        logout,
        getUID,
        getUser
    };

    return (
        // Email, Facebook, Apple, Twitter
        <Auth.Provider value={value}>
            { children }
        </Auth.Provider>
    );
};

export default AuthProvider;