import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import auth from '../../firebase/firebase.init'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // register user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
// login user with email and password
const signIn = (email, password) => {
    setLoading(true);
  return signInWithEmailAndPassword(auth, email, password);
};

// sign out user
const signOutUser =()=>{
setLoading(true);
return signOut(auth);
}


    // auth on changed 
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            console.log('Current User:', currentUser);
        });       

        return () => unsubscribe();
    }, [])

    const authInfo = {
        // Add your authentication logic and state here
        user,
        loading,
        createUser,
        signIn,
        signOutUser,
    };
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider> 
    );
};

export default AuthProvider;