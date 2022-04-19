import React, {createContext, useState} from "react"

//1. create the context
export const GlobalContext = createContext();

function GlobalContextProvider(props){
    //2. define the global state or function
    const [globalLoginId, setGlobalLoginId] = useState("Stranger");
    const [globalLoginFlg, setGlobalLoginFlg] = useState(false);

    return(
        <GlobalContext.Provider
            value={{
              gLoginId: [globalLoginId, setGlobalLoginId],
              gLoginFlg: [globalLoginFlg, setGlobalLoginFlg]
            }}
        >
        {props.children}
        </GlobalContext.Provider>
    )
}


export default GlobalContextProvider;