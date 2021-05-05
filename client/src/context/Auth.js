import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase"

// Create context object
const Auth = React.createContext();

export function useAuth() {
  return useContext(Auth);
}


// Creating new user in firebase and document in user collection in MongoDB
export const createUserFb = async (values) => {
  try {
    const created = await auth.createUserWithEmailAndPassword(values.email, values.password)

    // Get user UID from Firebase
    auth.onAuthStateChanged((user) => {
      if (user) {
        const userUID  = user.uid
        return userUID
      }
    })

  } catch (err) {
    console.log(err)
  }
}

export default function AuthProvider({ children }) {
  const [user, setUser] = useState();


  function login(email, password) {
    auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut()
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(token => {
      setUser(token);
    })

    return unsubscribe;
  }, [])

  const value = {
    user,
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