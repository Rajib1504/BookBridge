import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/axiosPublic";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";
export const AuthContext = createContext(null);

 const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const googlelogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const signUp = () => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = () => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
      } else {
        setUser(null)
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  });
  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    googlelogin,
    signUp,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
