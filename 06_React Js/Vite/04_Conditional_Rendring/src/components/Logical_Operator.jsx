import React, { useState } from 'react'

function Logical_Operator() {
    const [unreadMessage, setUnreadMessage] = useState(1);

  return (
    <div>
      <h1>Notification</h1>
      {
        unreadMessage > 0 && (<p>You have {unreadMessage} unread message(s).</p>)
      }
      {
        unreadMessage === 0 && <p>No unread message!!</p>
      }
    </div>
  )
}

export default Logical_Operator
