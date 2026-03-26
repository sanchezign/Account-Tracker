import { createContext, useContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transactions: []
}

export const Context = createContext()

export const useGlobalState = () => {
    const context = useContext(Context)
    return context
}

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState, 
    () => {
       const localDate = localStorage.getItem('transactions')
       return localDate ? JSON.parse(localDate) : initialState
    })
    //almacenar en localStorage
    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(state))
    }, [state])

   //agregar transaccion
    const addTransaction = (transactions) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transactions
        })
    }
    //eliminar transaccion
    const deleteTransaction = (id) => {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }

    return(
        <Context.Provider value={{
            transactions: state.transactions,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </Context.Provider>
    )

}