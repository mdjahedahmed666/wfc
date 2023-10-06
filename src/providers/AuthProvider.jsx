import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import auth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        user,
        loading,
        createUser,
        logInUser,
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
// AuthProvider.propTypes ={
//     children: PropTypes.node,
// }
AuthProvider.propTypes = {
    children: PropTypes.node
}