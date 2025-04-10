import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  return (
    <div className="container">
      <div className="chatbot-popup">
        {/* Chatbot Header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcom />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button className="material-symbols-rounded">
            keyboard_arrow_down
          </button>
        </div>
        {/* Chatbot Body */}
        <div className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey there 👋 <br /> How can I help you today?
            </p>
          </div>

          {/* {Render the chat history dynamically} */}
          {chatHistory.map((chat, index) => (
            <chatMessage key={index} chat={chat} />
          ))}
        </div>

        {/* Chatbot Footer */}

        <div className="chat-footer">
          <ChatForm setChatHistory={setChatHistory} />
        </div>
      </div>
    </div>
  );
};

export default App;
