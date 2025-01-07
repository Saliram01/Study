import React from "react";
import { useQuery , gql} from "@apollo/client";

const API_DATA = gql`
  query TodosData {
    getTodo {
      id
      title
      completed
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(API_DATA);

  if(loading) return <h3 style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
  }}>Loading...</h3>

  if(error) return <p style={{
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
}}>Error: {error.message}</p>

  return <>
    {/* <div>{JSON.stringify(data)}</div> */}
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap',flexDirection: 'column', gap: '20px', margin: '10px'}}>
      <h2>Server Data</h2>
        {
          data.getTodo.map((list) => <li key={list.id} style={{
            listStyleType: 'none',
            boxShadow: '0 0 5px #fff',
            borderRadius: '50px',
            width: '80%',
            textAlign: 'center',
            padding: '10px'
          }}>{list.title}</li>)
        }
    </div>
  </>
}

export default App;
