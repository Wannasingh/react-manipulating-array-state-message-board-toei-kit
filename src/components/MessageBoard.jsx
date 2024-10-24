import { useState } from "react";

function MessageBoard() {
  const [messageBoard, setMessageBoard] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleAddMsg = (event) => {
    setInputMessage(event.target.value);
  };

  const addMessage = (event) => {
    event.preventDefault();
    const newMessage = {
      id: messageBoard.length + 1,
      message: inputMessage,
    };
    setMessageBoard([...messageBoard, newMessage]);
    setInputMessage("");
  };

  const deleteMessageBoard = (id) => {
    const updateMessageBoard = messageBoard.filter(
      (messageBoard) => messageBoard.id !== id
    );
    setMessageBoard(updateMessageBoard);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={inputMessage}
            onChange={handleAddMsg}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>
          Submit
        </button>
      </div>
      <div class="board">
        {messageBoard.map((msg) => (
          <div className="message" key={msg.id}>
            <h1>{msg.message}</h1>
            <button
              className="delete-button"
              onClick={() => deleteMessageBoard(msg.id)}
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
