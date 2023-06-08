import { createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangeListener } from "../utils/firebase/firebase.utils";

export const AuthContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener(async (user) => {
      if(user) await createUserDocumentFromAuth(user);

      setCurrentUser(user)
    });

    return unsubscribe;
  })

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
