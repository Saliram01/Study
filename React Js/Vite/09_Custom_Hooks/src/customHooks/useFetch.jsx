import React, { useEffect, useState } from 'react'

function useFetch(URL) {
    const [apiData, setApiData] = useState([]);
    
    useEffect(() => {
        (async() => {
            try{
                const res = await fetch(URL);
                setApiData(await res.json());
            }
            catch(error) {
                console.log(error)
            }
        })();
    },[URL]);

  return [apiData]
}

export default useFetch
