import React,{createContext,useReducer} from "react";
import AppReducer from './AppReducer'
import  axios  from 'axios'

// Initial State

const InitialState = {
    transactions:[],
    error:null,
    loading:true
}

// Create Context

export const GlobalContext = createContext(InitialState)

// Provider Component
export const GlobalProvider = ({children}) => {
     const [state,dispatch] = useReducer(AppReducer,InitialState)

// Actions
async function getTransactions ()  {
    try {
        const res = await axios.get('http://localhost:5000/transactions');
        dispatch({
            type:'GET_TRANSACTIONS',
            payload:res.data.data
        })
    } catch (err) {
        dispatch({
            type:'TRANSACTION_ERROR',
            payload:err.message
        })
    }
}


async function deleteTransaction(id) {
    try {
        await axios.delete(`http://localhost:5000/transactions/${id}`);
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
        
    } catch (err) {
        dispatch({
            type:'TRANSACTION_ERROR',
            payload:err.message
        })
    }
    
}
async function addTransaction(transaction) {
    const config = {
        header:{
            'Content-Type':'application/json'
        }
    }
    try {
        await axios.post('http://localhost:5000/transactions',transaction,config);
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        })
    } catch (err) {
        dispatch({
            type:'TRANSACTION_ERROR',
            payload:err.message
        })
    }
    
}

     return(<GlobalContext.Provider value={{
        transactions:state.transactions,
        error:state.error,
        loading:state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction
     }}>
        {children}
     </GlobalContext.Provider>)
}