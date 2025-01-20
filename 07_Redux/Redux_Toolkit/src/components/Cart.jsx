import React from 'react'
import { useSelector } from 'react-redux';

export default function Cart(props) {
    const items = useSelector(state => state);
  return (
        <div style={{
            border: '2px solid #000',
            margin: '10px', 
            width: '250px',
            textAlign: 'center',
            padding: '10px',
            }}>
            <img src={props.image} alt="" />
            <h3>{props.productName}</h3>
            <h3>Rs. {props.price}</h3>
            <button style={{padding: '5px', cursor: 'pointer'}}>Add to Cart</button>
        </div>
  )
}
