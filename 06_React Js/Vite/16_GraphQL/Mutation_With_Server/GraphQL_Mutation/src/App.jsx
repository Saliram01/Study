import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "./mutation";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [addUser, { loading, error, data }] = useMutation(ADD_USER);

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ variables: { name, email } })
      .then((res) => {
        console.log(`User Name: ${res.data.addUser.name}`);
        console.log(`User Email: ${res.data.addUser.email}`);
        setName("");
        setEmail("");
      })
      .catch((error) => console.error("Error adding user : ", error));
  };

  return <div>
    <h2>Create New User</h2>
    <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <button type="submit">{loading ? 'Adding Users' : 'Add Users'}</button>
    </form>

    {loading && <p>Loading...</p>}
    {error && <p>Error: {error.message}</p>}
    {data && (<p>User Created: {data.addUser.name} ({data.addUser.email})</p>)}
    
  </div>;
}

export default App;
