import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

// Create context object
const Auth = React.createContext();

export function useAuth() {
  return useContext(Auth);
}


const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  
  // Creating new user in firebase and document in user collection in MongoDB
  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password)
  };

  // try {

  //   // Get user UID from Firebase
  //   auth.onAuthStateChanged((user) => {
  //     if (currentUser) {
  //       const userUID  = user.uid
  //       return userUID
  //     }
  //   })

  // } catch (err) {
  //   console.log(err)
  // }


  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(token => {
      setCurrentUser(token);
    })
    // Unsubscribe from the listener onAuthStateChanged
    return unsubscribe;
  }, [])

  const value = {
    currentUser,
    signup,
    login,
    logout
  };

  return (
    // Email, Facebook, Apple, Twitter
    <Auth.Provider value={value}>
      { children }
    </Auth.Provider>
  );
}

export default AuthProvider;