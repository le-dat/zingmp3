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

interface AuthContextProps {
  signUp: (email: string, password: string) => Promise<void>
  login: (email: string, password: string) => Promise<void>
  logOut: () => Promise<void>
  signInWithGoogle: () => void
  updateCurrentUser: (photoUrl: string) => Promise<void>
  currentUser: any
}
const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const useAuthContext = (): AuthContextProps => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider")
  }
  return context
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

  const signUp = async (email: string, password: string): Promise<void> => {
    await createUserWithEmailAndPassword(firebaseAuth, email, password)
  }

  const login = async (email: string, password: string): Promise<void> => {
    await signInWithEmailAndPassword(firebaseAuth, email, password)
  }

  const logOut = async (): Promise<void> => {
    await signOut(firebaseAuth)
    setCurrentUser(null)
  }

  const signInWithGoogle = (): void => {
    signInWithRedirect(firebaseAuth, provider)
  }

  const updateCurrentUser = async (photoURL: string): Promise<void> => {
    if (currentUser) {
      await updateProfile(currentUser, { photoURL })
    }
  }
  const value = { signUp, login, logOut, currentUser, signInWithGoogle, updateCurrentUser }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
