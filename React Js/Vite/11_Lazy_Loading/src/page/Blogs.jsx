import React, { useEffect, useState } from 'react'

function Blogs() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setResult(data));
  },[]);

  return (
    <div>
      {
        result.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default Blogs
