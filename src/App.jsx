import Chatbotlcom from "./components/Chatbotlcom";

const App = () => {
  return (
    <div className="container">
      <div className="chatbot-popup">
        {/* Chatbot Header */}
        <div className="chat-header">
          <div className="header-info">
            <Chatbotlcom />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button className="material-symbols-rounded">
            keyboard_arrow_down
          </button>
        </div>
        {/* Chatbot Body */}
        <div className="chat-body">
          <div className="message bot-message">
            <Chatbotlcom />
            <p className="message-text">
              Hey there 👋 <br /> How can I help you today?
            </p>
          </div>

          <div className="message user-message">
            <p className="message-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>
        {/* Chatbot Footer */}
        <div className="chat-footer">
          <form action="#" className="chat-form">
            <input
              type="text"
              placeholder="Message..."
              className="message-input"
              required
            />
             <button className="material-symbols-rounded">
            arrow_upward
          </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
