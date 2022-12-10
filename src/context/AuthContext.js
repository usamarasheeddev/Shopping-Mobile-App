import React, { createContext, useContext, useReducer, useEffect } from 'react'


const AuthContext = createContext()

const initialState = { isAuthenticated: true }

const reducer = (state, { type, payload }) => {

    switch (type) {
        case "LOGIN":

            return Object.assign({}, { isAuthenticated: true }, { user: payload.user },{ user:payload.user })
        case "FORGET":
            console.log('wor')
            return Object.assign({}, { isAuthenticated: false }, { user: payload.user })
        case "LOGOUT":
            return Object.assign({}, { isAuthenticated: false })

        default:
            return state
    }

}

export default function AuthContextProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext)
}