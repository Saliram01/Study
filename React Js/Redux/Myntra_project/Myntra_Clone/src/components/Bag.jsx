import React from 'react'
import BagSummary from './BagSummary'
import BagItems from './BagItems'
import {useSelector} from 'react-redux'

function Bag() {
  const items = useSelector(store => store.items);
  return (
    <main>
      <div className="bag-page">
        <BagItems item={items}/>
        <BagSummary/>
      </div>
    </main>
  )
}

export default Bag