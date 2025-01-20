import React, { useRef, useState } from "react";
import { IoCamera } from "react-icons/io5";
import { GrAttachment } from "react-icons/gr";

function Chat_Form({chatHistory, setChatHistory, generateAiResponse}) {
  const inputRef = useRef();

  const fileRefAttach = useRef();
  const [attachFile, setAttachFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if(!userMessage && !attachFile) return;
    inputRef.current.value = '';

    const newMessage = { image: attachFile ? attachFile.url : null };
    
    setChatHistory(prevMessage => [...prevMessage,{role: 'user', text: userMessage, image: attachFile ? attachFile.url : null}]);
 
    setTimeout(() => setChatHistory(prevMsg => [...prevMsg,{role: 'model', text: "Processing..."}]),600);
    generateAiResponse([...chatHistory,{role: "user", text: userMessage, files: newMessage}]);

  }
 
  const handleClick = () => { fileRefAttach.current.click()};
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
    setAttachFile({ file, url: URL.createObjectURL(file) });
    
    }
  }

  return (
    <form action="#" className="chat-form" onSubmit={handleSubmit}>
    <input type="text" className="message-input" placeholder="Message..." ref={inputRef} required
    />
    {attachFile && (
        <div style={{ marginRight: "20px" }}>
          <img src={attachFile.url} alt="Preview"
            style={{ width: "30px", height: "30px",cursor:'pointer' }}
          />
        </div>
      )}
    <div style={{display: 'flex',gap: '20px', paddingRight: '20px'}}>
      <IoCamera style={{cursor:'pointer'}}/>
      <GrAttachment style={{cursor: "pointer"}} onClick={handleClick}/>
      <input type="file" ref={fileRefAttach} style={{display: 'none'}} onChange={handleFileChange}/>
    </div>
    <button> <i className="fa-solid fa-arrow-up"></i></button>
  </form>
  );
} 

export default Chat_Form;