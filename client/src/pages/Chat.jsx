import { useState } from "react";
import axios from "axios";

function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;
    setLoading(true);


    try {
      const response = await axios.post(
        "http://localhost:5000/chat",
        {
          message: message,
        }
      );

      setMessages([
        ...messages,
        {
          user: message,
          bot: response.data.reply,
        },
      ]);

      setMessage("");
      setLoading(false);

    } catch (error) {
  console.log(error);
  setLoading(false);
}
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>AI Chatbot</h1>

      <input
        type="text"
        value={message}
        placeholder="Ask anything..."
        onChange={(e) =>
          setMessage(e.target.value)
        }
      />

      <button onClick={sendMessage}>
        Send
      </button>

      <hr />
{loading && <p>🤖 Bot is typing...</p>}
      {messages.map((chat, index) => (
        <div key={index}>
          <p>
            <b>You:</b> {chat.user}
          </p>

          <p>
            <b>Bot:</b> {chat.bot}
          </p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Chat;