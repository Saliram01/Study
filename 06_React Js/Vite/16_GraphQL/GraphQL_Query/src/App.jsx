import React from "react";
import Heading from "./components/Heading";
import { useQuery, gql } from '@apollo/client'

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      emoji
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if(!data || !Array.isArray(data.countries)) return <p>No data availabel</p>;

  return (
    <div>
      <Heading />
      <h2> Countries And Emoji </h2>
      <ol style={{marginLeft: '15px'}}>
        {
          data.countries.map((country) => <li key={country.code}>{country.name} {country.emoji}</li>)
        }
      </ol>
    </div>
  );
}

export default App;
