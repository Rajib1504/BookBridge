// @ts-nocheck
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { User } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";
export const AuthContext = createContext(null);

 const AuthProvider = ({ children }) => { 
  const [user, setUser] = useState<User|null>(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const googlelogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const Register = (email:string,password:string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email:string,password:string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  }; // updagte profile
  const updateUserProfile = (name:string, photo:string) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
        // if (currentUser) {
        //   //get token and store Client
        //   const userInfo = { email: currentUser.email }; // take the email from the current login user
        //   // axiosPublic.post("/jwt", userInfo).then((res) => {
        //   //   // console.log(res.data.token);
        //   //   if (res.data.token) {
        //   //     localStorage.setItem("access-token", res.data.token);
        //   //   }
        //   // });
        // } else {
        //   // TODO: remove GiToken(if token stored in the clint side: Local Storage,caching,in memory )for cookie we need to remove it form the backend
        //   localStorage.removeItem("access-token"); // we will remove the token
        // }
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
    Register,
    login,
    logout,
    updateUserProfile
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
