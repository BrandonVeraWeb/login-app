import { createContext, useContext, useEffect, useState } from 'react';
import{ sendPasswordResetEmail,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider, } from 'firebase/auth';
import { auth } from "../firebase";

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    return context
};

function AuthProvider({children}){

        const [user,setUser,] = useState (null);
        const [loading, setLoading] = useState(true);
        // const [accessToken, setAccessToken] = useState("");

        const signup = (email, password ) => createUserWithEmailAndPassword(auth, email, password ); 
        

        const Login = (email,password ) => signInWithEmailAndPassword (auth, email, password);
        

        const logout = () => signOut(auth);

        const loginWithGoogle = () => {
            const googleProvider = new GoogleAuthProvider();
            return signInWithPopup(auth, googleProvider);
        };

        const resetPassword = (email) =>{
            sendPasswordResetEmail(auth,email)
        }

        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
                setUser(currentUser);
                // setAccessToken(auth.currentUser.accessToken)
                setLoading(false);
            });
            return() => unsubscribe();
        },[])
        
    return (
    <authContext.Provider value ={{  signup, Login, user, logout, loading, loginWithGoogle,resetPassword,}}>{children}
    </authContext.Provider>
    );
   
}

export {AuthProvider};