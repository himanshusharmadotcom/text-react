import React, { createContext, useContext, useState } from "react";

const TextContext = createContext()

const TextProvider = ({children}) => {

    const [cntState, setCntState] = useState(true)

    const checkCnt = () => {
        setCntState(!cntState)
    }

    return(
        <TextContext.Provider value={{cntState, checkCnt}}>
            {children}
        </TextContext.Provider>
    )

}

const useTextContext = () => {
    return useContext(TextContext);
}

export {TextContext, TextProvider, useTextContext}