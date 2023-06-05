import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
  updateProfile,
} from "firebase/auth"
import React, { createContext, useContext, useEffect, useState } from "react"

import { firebaseAuth } from "../utils/firebase"

interface AuthContextIProps {
  signUp: (email: string, password: string) => void
  login: (email: string, password: string) => void
  logOut: () => void
  signInWithGoogle: () => void
  updateCurrentUser: (photoUrl: string) => void
  currentUser: any
}
const AuthContext = createContext({} as AuthContextIProps)
export const useAuthContext = () => {
  return useContext(AuthContext)
}

interface IProps {
  children: React.ReactNode
}
const AuthProvider: React.FC<IProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>({})
  const provider = new GoogleAuthProvider()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
      setCurrentUser(user)
    })
    return () => unsubscribe()
  }, [])

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password)
  }
  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password)
  }
  const logOut = () => {
    setCurrentUser(null)
    return signOut(firebaseAuth)
  }

  const signInWithGoogle = () => {
    signInWithRedirect(firebaseAuth, provider)
  }

  const updateCurrentUser = (photoURL: string) => {
    return updateProfile(currentUser, {
      photoURL: photoURL,
    })
  }
  const value = { signUp, login, logOut, currentUser, signInWithGoogle, updateCurrentUser }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
