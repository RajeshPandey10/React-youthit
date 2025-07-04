import React, { createContext, useReducer, useContext } from "react";

// Step 1: Define the shape of our state
const initialState = {
  inputValue: 0,
  user: null,
  isLoggedIn: false,
  currentPage: "login", // "login", "register", "home"
  registeredUsers: [], // Store registered users
};

// Step 2: Define action types for better organization
const ACTION_TYPES = {
  SET_INPUT_VALUE: "SET_INPUT_VALUE",
  SET_INPUT_VALUE_TO_100: "SET_INPUT_VALUE_TO_100",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  REGISTER: "REGISTER",
  SET_CURRENT_PAGE: "SET_CURRENT_PAGE",
};

// Step 3: Create the reducer function to handle state updates
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload,
      };
    case ACTION_TYPES.SET_INPUT_VALUE_TO_100:
      return {
        ...state,
        inputValue: 100,
      };
    case ACTION_TYPES.LOGIN:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        currentPage: "home",
      };
    case ACTION_TYPES.REGISTER:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        currentPage: "home",
        registeredUsers: [...state.registeredUsers, action.payload],
      };
    case ACTION_TYPES.LOGOUT:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
        currentPage: "login",
      };
    case ACTION_TYPES.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

// Step 4: Create the Context
const AuthContext = createContext();

// Step 5: Create the Provider component
function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Helper functions to make it easier to use
  const setInputValue = (value) => {
    dispatch({ type: ACTION_TYPES.SET_INPUT_VALUE, payload: value });
  };

  const setInputValueTo100 = () => {
    dispatch({ type: ACTION_TYPES.SET_INPUT_VALUE_TO_100 });
  };

  const login = (loginData) => {
    // Find user by email from registered users
    const existingUser = state.registeredUsers.find(
      (user) => user.email === loginData.email
    );

    if (existingUser) {
      // Use the registered user's data
      dispatch({ type: ACTION_TYPES.LOGIN, payload: existingUser });
    } else {
      // If user not found in registered users, extract name from email
      const name = loginData.email.split("@")[0].replace(/[^a-zA-Z]/g, "");
      const displayName = name.charAt(0).toUpperCase() + name.slice(1);

      dispatch({
        type: ACTION_TYPES.LOGIN,
        payload: {
          name: displayName || "User",
          email: loginData.email,
        },
      });
    }
  };

  const register = (user) => {
    dispatch({ type: ACTION_TYPES.REGISTER, payload: user });
  };

  const logout = () => {
    dispatch({ type: ACTION_TYPES.LOGOUT });
  };

  const setCurrentPage = (page) => {
    dispatch({ type: ACTION_TYPES.SET_CURRENT_PAGE, payload: page });
  };

  // The value object that will be passed to consumers
  const value = {
    // State
    inputValue: state.inputValue,
    user: state.user,
    isLoggedIn: state.isLoggedIn,
    currentPage: state.currentPage,
    registeredUsers: state.registeredUsers,

    // Actions
    setInputValue,
    setInputValueTo100,
    login,
    register,
    logout,
    setCurrentPage,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Step 6: Create a custom hook for easier consumption
function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// Export everything
export { AuthProvider, useAuth, ACTION_TYPES };
