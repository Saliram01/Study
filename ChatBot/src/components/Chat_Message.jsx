import React from 'react'
import ChatBotIcon from './ChatBotIcon'

function Chat_Message({chat}) {
  return (
    <div className={`message ${chat.role === "model" ? "bot" : "user"}-message`}>
        {chat.role === "model" && <ChatBotIcon/>}
      <p className="message-text">{chat.text}</p>
      {
        chat.image && (
          <img src={chat.image} alt="attachment" style={{
            maxWidth: "150px", marginTop: "5px"
          }}/>
        )
      }
    </div>
  )
}

export default Chat_Message
