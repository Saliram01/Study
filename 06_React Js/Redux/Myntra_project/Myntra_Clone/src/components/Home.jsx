import React from 'react'
import HomeItems from './HomeItems'
import {useSelector} from 'react-redux'

function Home() {
  const items = useSelector(store => store.items);

  return (
    <main>
        <div className="items-container">
          {items.map((el) => <HomeItems key={el.id} item={el}/>)}
        </div>
      </main>
  )
}

export default Home