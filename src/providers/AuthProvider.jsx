import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
  signOut,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app); 
const googleProvider =  new GoogleAuthProvider();

// const googleProvider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }
const logOut = () => {
  setLoading(true);
    return signOut(auth);
}

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
      if(currentUser){
        setUserName(currentUser.name || null);
      }
    });
    return ()=>{
       unSubscribe ();
    }
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    logInUser,
    logOut,
    logInWithGoogle,
    userName
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
// AuthProvider.propTypes ={
//     children: PropTypes.node,
// }
AuthProvider.propTypes = {
  children: PropTypes.node,
};
