import Chatbotlcom from "./components/Chatbotlcom";

const App = () => {
  return (
    <div className="container">
      <div className="chatbot-popup">
        <div className="chat-header">
          <div className="header-info">
            <Chatbotlcom/>
            <h2 className="logo-text">Chatbot</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
