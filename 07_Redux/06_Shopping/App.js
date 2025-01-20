import React from 'react'
import './App.css'
import Card from './components/Card';
import { useSelector } from 'react-redux';

function App() {
  const productList = useSelector((state) => state.products);
  
  return (
    <div>
      <h2 className='title'>React & Redux</h2>
      <div className='product'>
        {
          productList.map(({id,title,price,description,image}) => <Card 
          key={id} title={title} price={price} description={description} img={image}/>)
        }
      </div>
    </div>
  )
}

export default App
