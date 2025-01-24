import React, { useRef, useState } from "react";
import { GrAttachment } from "react-icons/gr";
import axios from "axios";

function Chat_Form({ chatHistory, setChatHistory, generateAiResponse }) {
  const inputRef = useRef();
  const fileRefAttach = useRef();
  const [attachFile, setAttachFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage && !attachFile) return;

    inputRef.current.value = "";

    let newMessage = null;
    if (attachFile) {
      const formData = new FormData();
      formData.append("image", attachFile.file);

      try {
        const response = await axios.post("/upload", formData, {
          headers: {"Content-Type": "multipart/form-data"},
        });

        newMessage = response.data.imageUrl;
      } catch (err) {
        console.error("Error uploading file:", err);
      }
    }

    setChatHistory((prevMessage) => [...prevMessage,
      { role: "user", text: userMessage, image: newMessage },
    ]);

    setTimeout(() => {
      setChatHistory((prevMsg) => [...prevMsg,{ role: "model", text: "Processing..." },]);
    }, 600);

    generateAiResponse([
      ...chatHistory,
      { role: "user", text: userMessage, image: newMessage },
    ]);

    setAttachFile(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setAttachFile({ file, url: URL.createObjectURL(file) });
    } else {
      console.error("Only images are allowed.");
    }
  };

  return (
    <form className="chat-form" onSubmit={handleSubmit} method="POST">
      <input type="text" className="message-input" placeholder="Message..." ref={inputRef}
        required={!attachFile}
      />

      {attachFile && (
        <img src={attachFile.url || ""} alt="Preview"
          style={{
            width: "30px",
            height: "30px",
            cursor: "pointer",
            marginRight: "20px",
          }}
        />
      )}

      <div style={{ display: "flex", gap: "20px", paddingRight: "20px" }}>
        <GrAttachment style={{ cursor: "pointer" }} onClick={() => fileRefAttach.current.click()}
        />
        <input type="file" ref={fileRefAttach} style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>
      <button>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </form>
  );
}

export default Chat_Form;
