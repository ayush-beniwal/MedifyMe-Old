import styles from "./Register.module.css";
import useChatGPT from "../../hooks/useChatGPT";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useRef } from "react";

function Register() {
  const { messages, handleSend } = useChatGPT();

  const messageListRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messageListRef.current.lastChild.scrollIntoView();
    inputRef.current.focus();
  }, [messages]);

  const handleButtonClick = () => {
    const inputValue = inputRef.current.value;
    handleSend(inputValue);
    inputRef.current.value = "";
  };

  return (
    <div className={styles.chatContainer}>
      <Navbar />
      <div className={styles.title}>Tell us about yourself</div>
      <div className={styles.messageList} ref={messageListRef}>
        {messages.map((message, i) => (
          <div
            key={i}
            className={`${
              message.sender === "ChatGPT" ? styles.incoming : styles.outgoing
            }`}
          >
            <div className={styles.messageText}>{message.message}</div>
          </div>
        ))}
      </div>
      <div className={styles.messageInput}>
        <input
          type="text"
          placeholder="Enter your message here"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSend(e.target.value);
              e.target.value = "";
            }
          }}
          ref={inputRef}
        />
        <button onClick={handleButtonClick} className={styles.button}>
          <img src="image8.svg" />
        </button>
      </div>
    </div>
  );
}

export default Register;
