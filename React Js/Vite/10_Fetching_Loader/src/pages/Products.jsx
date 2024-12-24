import React from 'react'
import { useLoaderData } from 'react-router-dom';

function Products() {
    const product = useLoaderData();
  return (
    <div>
        {
          product.map((items) => {
            return (
              <div key={items.id}>
                <h2>{items.title}</h2>
                <p>{items.body}</p>
              </div>
            )
          })
        }
    </div>
  )
}
export default Products;