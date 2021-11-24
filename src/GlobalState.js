import React, { createContext} from "react";
import MoviesApi from "./api/MoviesApi";


export const GlobalState = createContext();

export const Dataprovider = ({children}) => {
    

   const state = {
         moviesApi: MoviesApi(),
    }

return(
    <GlobalState.Provider value = {state}>
        {children}
    </GlobalState.Provider>
)

}

