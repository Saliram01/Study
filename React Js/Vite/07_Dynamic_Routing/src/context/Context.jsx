import React, { createContext, useState, useEffect } from 'react'

export const ContextApi = createContext({
  title: '',
  data: [],
});

function Context({children}) {
  const [search, setSearch] = useState('');
  const title = 'Responsive Card';

  const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/carts")
          .then((res) => res.json())
          .then((data) => {
            let newData = data.carts;
            setData(newData);
          });
      },[]);

  return (
    <ContextApi.Provider value={{title,search,setSearch, data}}>
        {children}
    </ContextApi.Provider>
  )
}

export default Context
