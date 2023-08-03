import React, { useEffect, useReducer, createContext } from 'react';

const initialState = {
  user: null
}

const AuthContext = createContext({
  user: null,
  login: (userData) => {},
  logout: () => {}
})

const authReducer = (state, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload
      }
    case 'LOGOUT':
      return {
        ...state,
        user: null
      }
    default:
      return state;
  }
}

function AuthProvider (props) {
  const [state, dispatch] = useReducer(authReducer, initialState)

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     console.log('outside:', localStorage.getItem("token"))
      
  //     if (localStorage.getItem("token") !== "undefined") {
  //       console.log('inside:', localStorage.getItem("token"))

  //       const decodedToken = jwtDecode(localStorage.getItem("token"));
  //       if (decodedToken.exp * 1000 < Date.now()) {
  //           localStorage.removeItem("token");
  //       } else {
  //           initialState.user = decodedToken;
  //       }
  //     }

  //   }
  // }, [])

  const login = (userData) => {
    console.log('login creds', userData)
    localStorage.setItem("token", userData.email);
    dispatch({
      type: 'LOGIN',
      payload: userData
    })
  }

  const logout = () => {
    localStorage.removeItem("token");
    dispatch({ type: 'LOGOUT' });
  }

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  )
}

export { AuthContext, AuthProvider };