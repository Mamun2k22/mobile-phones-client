import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({ children }) => {

    // Provider Login
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }
    // User Location observer
    const [user, setUser] = useState(null)

    // Loading
    const [loading, setLoading] = useState()

    // Sign UP
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    // Sign In
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Provider
    const googleSignIn = (gProvider) => {
        return signInWithPopup(auth, gProvider)
    }



    // Log Out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    // Update User
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    // UseEffect
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log("User Observing");
            setUser(currentUser);
            setLoading(false)

        });
        return () => unsubscribe()

    }, [])

    const authInfo = {
        createUser,
        googleSignIn,
        signIn,
        updateUser,
        logOut,
        user,
        loading

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;