import Header from "./components/Header";
import Chat_Message from "./components/Chat_Message";
import Chat_Form from "./components/Chat_Form";
import { useEffect, useRef, useState } from "react";

function App() {
  const [chatHistory, setChatHistory] = useState([
    {role: "model", text: "Hey there👋"},
  ]);
  const bodyRef = useRef();

  const generateAiResponse = async (history) => {
    const updateHistory = (text, error = false) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Processing..."),
        { role: error ? "error" : "model", text },
      ]);
    };

    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    const reqOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    };

    try {
      if (!import.meta.env.VITE_APP_URL) {
        throw new Error("API URL is not defined in environment variables.");
      }

      const response = await fetch(import.meta.env.VITE_APP_URL, reqOption);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message || "Something went wrong...");
      }

      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();
      updateHistory(apiResponseText);
    } catch (error) {
      console.error("Error fetching AI response:", error.message);
      updateHistory("Oops! Something went wrong. Please try again.", true);
    }
  };

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTo({
        top: bodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory]);

  return (
    <div className="main-container">
      <Header setChatHistory={setChatHistory} />
      <div className="container">
        <div className="chat-box">
          <h2>Hi, Good Morning...!</h2>
          <div className="chat-body" ref={bodyRef}>
            {chatHistory.map((chat, index) => (
              <Chat_Message key={index} chat={chat} />
            ))}
          </div>
        </div>

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
