import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";


export const authUseContext = createContext(null);

       const Gprovider = new GoogleAuthProvider()

const AuthContext = ({children}) => {

    const [ user, setUser ] = useState(null)

    const [ loading, setLoading] = useState(true)

    
    const createUser = (email, password) => {
     
     setLoading(true)   
     return createUserWithEmailAndPassword(auth, email, password)

    }

    const signIn = (email, password) => {
      
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)

    } 

    const signGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, Gprovider)
    }

    const logOut = () => {
        setLoading(true)
        signOut(auth)
    }

        /////////////
        useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false)
         })
         return() => {
            unSubscribe();
         }
         } , [])
    
        ///////////////


    const authInfo = { user, createUser, signIn, signGoogle, loading, logOut }


    return (
        <div>

            <authUseContext.Provider value={authInfo} >
                 
                 {children}
  
            </authUseContext.Provider>
            
        </div>
    );
};

export default AuthContext;