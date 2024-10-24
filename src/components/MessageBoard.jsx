import { useState } from "react";

function MessageBoard() {
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (messageText.trim()) {
      setMessages((prevMessages) => [...prevMessages, messageText]);
      setMessageText("");
    }
  };

  const handleDelete = (index) => {
    setMessages((prevMessages) =>
      prevMessages.filter((_, messageIndex) => messageIndex !== index)
    );
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message Board</h1>
      <div className="message-input-container">
        <label htmlFor="message-text">
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
          />
        </label>
        <button className="submit-message-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className="board">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <h1>{message}</h1>
            <button
              className="delete-button"
              onClick={() => handleDelete(index)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
