import { createContext, useState, useEffect } from "react";
import { auth } from "../config/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  const googleAuth = async () => {
    setIsLoading(true);
    let provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.log(err.message);
    }

    setIsLoading(false);
  };

  const logout = async () => {
    await auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, googleAuth, isLoading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
