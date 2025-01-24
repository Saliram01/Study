import React from "react";
import ChatBotIcon from "./ChatBotIcon";
import UserIcon from "./UserIcon";

function Chat_Message({ chat }) {
  return (
    <div
      className={`message ${chat.role === "model" ? "bot" : "user"}-message`}
    >
      {chat.image && (
        <img
          src={chat.image}
          alt="attachment"
          style={{ maxWidth: "150px", marginTop: "5px" }}
        />
      )}

      {chat.role === "model" && <ChatBotIcon />}
      {(chat.text || chat.role === "user") && (
        <div
          style={{ display: "flex", gap: "15px", alignItems: "center" }}
        >
          {chat.text && <p className="message-text">{chat.text}</p>}
          {chat.role === "user" && <UserIcon />}
        </div>
      )}
    </div>
  );
}
export default Chat_Message;