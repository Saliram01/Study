import Header from "./components/Header";
import Chat_Message from "./components/Chat_Message";
import Chat_Form from "./components/Chat_Form";
import ChatBotIcon from "./components/ChatBotIcon";
import { useEffect, useRef, useState } from "react";
import PopupResponse from "./components/PopupResponse";

function App() {
  const [chatHistory, setChatHistory] = useState([]);
  const bodyRef = useRef();

  const [showResponse, setShowResponse] = useState(true);

  const generateAiResponse = async (history) => {
    const updateHistory = (text) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Processing..."),
        { role: "model", text },
      ]);
    };

    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    const reqOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    };

    try {
      const response = await fetch(import.meta.env.VITE_APP_URL, reqOption);
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error.message || "Something went wrong...!");

      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();
      updateHistory(apiResponseText);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    bodyRef.current.scrollTo({
      top: bodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory]);

  // const leng = chatHistory.length;

  return (
    <div className="main-container">
      {/* {
        leng >= 1 && showResponse ? <PopupResponse showResponse={showResponse} chatHistory={chatHistory}/> : ''
      } */}
      <Header setChatHistory={setChatHistory} setShowResponse={setShowResponse}/>
      <div className="container">
        <div className="chat-box">
          <h2>Hay, Good Morning...!</h2>
          <div className="chat-body" ref={bodyRef}>
            {/* CHAT AI */}
            <div className="message bot-message">
              <ChatBotIcon/>
              <p className="message-text">
                Hey there 👋
                <br /> How can i help you?
              </p>
            </div>

            {/* randomly generate chat message */}
            {chatHistory.map((chat, index) => (
              <Chat_Message key={index} chat={chat} /> 
            ))}
          </div>
        </div>
  
        {/* Chat Footer */}
        <div className="chat-footer">
          <Chat_Form
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateAiResponse={generateAiResponse}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
