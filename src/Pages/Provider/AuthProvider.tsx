// import { createContext, useState } from "react";
// import useAxiosPublic from "../../Hooks/axiosPublic";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "../../Firebase/Firebase.config";


// const AuthProvider = ({children}) => {
//   const axiosPublic =useAxiosPublic();
//   const [user,setuser]=useState(null)
//   const [loading,setLoading]=useState(true)
//   const AuthContext = createContext(null)
//   const googleProvider = new GoogleAuthProvider()

//   const googlelogin = ()=>{
//       setLoading(true)
//      return signInWithPopup(auth,googleProvider)
//   };
//   const authInfo = {
//       googlelogin
//   }
//   return
// //   <AuthContext.Provider()
// };

// export default AuthProvider;