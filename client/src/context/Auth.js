import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase"

// Create context object
const Auth = React.createContext();

export function useAuth() {
  return useContext(Auth);
}

export function signup(email, password) {
  auth.createUserWithEmailAndPassword(email, password)
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
    <Auth.Provider value={value}>
      { children }
    </Auth.Provider>
  );
}