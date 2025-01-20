import React from 'react'
import products from '../../products.json'
import Cart from './Cart'

export default function Product() {
  return (<>
      <h3 style={{textAlign: 'center'}}>Total Items: (5) (Rs. 3,000)</h3>
    <div style={{display: 'flex', flexWrap: 'wrap',justifyContent: 'center',alignItems: 'center'}}>
      {
        products.map((product) => <Cart {...product} key={product.id}/>)
      }
    </div>
    </>
  )
}
