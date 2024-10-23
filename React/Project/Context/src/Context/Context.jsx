import React, { createContext, useState } from 'react'

export const ContextApi = createContext();

function ContextProvider(props) {
    const [count , setCount] = useState(0);

    const phone = "9869576161";
    const address = "Kailali ga.pa 7 Rampur";

  return (
    <ContextApi.Provider value={{phone,address,count,setCount}}>
        {props.children}
    </ContextApi.Provider>
  )
}

export default ContextProvider;