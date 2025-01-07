import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
  // State to store the data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch data using useEffect
  useEffect(() => {
    // API endpoint
    const fetchData = async () => {
      try {
        // Make the GET request
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        
        // Set the data to the state
        setData(response.data);
        setLoading(false);
      } catch (err) {
        // Handle errors
        setError('Error fetching data');
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);  // Empty dependency array means it runs once when the component mounts

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Fetched Data</h1>
      <ol>
        {data.map(item => (
          <li key={item.id}>
            {item.title}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Posts;
