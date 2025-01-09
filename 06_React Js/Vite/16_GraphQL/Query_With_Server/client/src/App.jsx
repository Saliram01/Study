import React from "react";
import { useQuery , gql} from "@apollo/client";

const API_DATA = gql`
  query getUsers {
    getUsers {
      id
      name
      email
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
          data.getUsers.map((list) => <div key={list.id} style={{
            listStyleType: 'none',
            boxShadow: '0 0 5px #fff',
            borderRadius: '50px',
            width: '80%',
            textAlign: 'center',
            padding: '10px'
          }}>
            <ul>
              <li>{list.name}</li>
              <li>{list.email}</li>
            </ul>
          </div>)
        }
    </div>
  </>
}

export default App;
