import { createContext, useEffect, useReducer, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangeListener } from "../utils/firebase/firebase.utils";


export const AuthContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const AuthProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const { currentUser } = state;

  const setCurrentUser = (user) => dispatch({
    type: USER_ACTION_TYPES.SET_CURRENT_USER,
    payload: user
  });

  const value = { currentUser, setCurrentUser };


  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
