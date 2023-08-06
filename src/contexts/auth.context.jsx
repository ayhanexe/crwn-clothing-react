import { createContext, useEffect, useReducer, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangeListener } from "../utils/firebase/firebase.utils";

export const USER_ACTION_TYPES = Object.freeze({
  SET_CURRENT_USER: Symbol("SET_CURRENT_USER")
})

export const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }
    default:
      throw new Error(`Unhandled type \`${type}\` in userReducer!`);
  }
}

export const AuthContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const INITIAL_STATE = {
  currentUser: null
}

export const AuthProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const { currentUser } = state;

  const setCurrentUser = (user) => dispatch({
    type: USER_ACTION_TYPES.SET_CURRENT_USER,
    payload: user
  });

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener(async (user) => {
      if (user) await createUserDocumentFromAuth(user);

      setCurrentUser(user)
    });

    return unsubscribe;
  })

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
