import { createContext, useEffect, useState } from "react";
import { PropTypes } from 'prop-types';
import { createUserWithEmailAndPassword,onAuthStateChanged, updateProfile, signInWithEmailAndPassword,signInWithPopup, signOut} from 'firebase/auth';
import auth from "./firebase.config";
export const AuthProvider = createContext(null)
const FirebaseProvider = ({children}) => {
    const [userInfo,setUserInfo] = useState(null)
    const [loading,setLoading] = useState(true)
    const createUser = (email,pass)=>{
        return createUserWithEmailAndPassword(auth,email,pass)
    }
    const logInWithUP = (email,pass)=>{
        return signInWithEmailAndPassword(auth,email,pass)
    }
    const signInPopUp = (provider)=>{
        return signInWithPopup(auth,provider)
    }
    const handleUpdateProfile = ()=>{
        return updateProfile()
    }
    const logOut = ()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log("user in the auth state changed", currentUser)
            setUserInfo(currentUser);
            setLoading(false)
            // setLoader(false)
            console.log(currentUser);
        });
        return ()=>{
            unSubscribe();
        }
    },[]);
    const authValue = {createUser,signInPopUp,logInWithUP,logOut,userInfo,loading,handleUpdateProfile}
    return (
        <AuthProvider.Provider value={authValue}>
            {children}
        </AuthProvider.Provider>
    );
};
FirebaseProvider.propTypes = {
    children: PropTypes.node
}

export default FirebaseProvider;