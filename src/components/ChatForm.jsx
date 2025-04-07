const ChatForm = () => {
  return (
    <form action="#" className="chat-form">
      <input
        type="text"
        placeholder="Message..."
        className="message-input"
        required
      />
      <button className="material-symbols-rounded">arrow_upward</button>
    </form>
  );
};

export default ChatForm;
