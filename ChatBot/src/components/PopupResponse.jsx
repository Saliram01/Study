import React from 'react'
import ChatBotIcon from './ChatBotIcon'

function PopupResponse({chatHistory}) {
  return (
    <>
      {chatHistory.map((chat, index) => (<div key={index} className='popup-container'>
        <div className={`message ${chat.role === "model" ? "bot" : "user"}-message`}>
        {chat.role === "model" && <ChatBotIcon/>}
      <p className="message-text popup">{chat.text}</p>
    </div>
    </div>))}
    </>
  )
}

export default PopupResponse
