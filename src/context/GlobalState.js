import React , {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//initialisation du state qui sera accessible dans les autres composant 

const initialState = {
    users : [ ]
};

//On crée le context on le passe le state

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer,initialState);

    //action de suppression des tâches
    const removeUser = (id) =>{
        dispatch({
            type : 'REMOVE_USER',
            payload : id
        })
    }
    const addUser = (user) =>{
        dispatch({
            type : 'ADD_USER',
            payload : user
        })
    }
    const editUser = (user) =>{
        dispatch({
            type : 'EDIT_USER',
            payload : user
        })
    }

    return(
        <GlobalContext.Provider value = {{users: state.users , removeUser ,addUser,editUser}} >
            {children}
        </GlobalContext.Provider>
    )
}