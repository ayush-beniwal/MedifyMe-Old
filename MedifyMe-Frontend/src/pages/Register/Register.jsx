import styles from "./Register.module.css";
import useChatGPT from "../../hooks/useChatGPT";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../../store";
import { useCookies } from "react-cookie";
import { loginSuccess, logoutSuccess } from "../../store";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { messages, handleSend } = useChatGPT();
  const [register, registerResults] = useRegisterMutation();
  const [cookies, setCookie] = useCookies(["patient"]);
  const lastElement = messages[messages.length - 1];

  const messageListRef = useRef(null);
  const inputRef = useRef(null);

  const patient = useSelector((state) => {
    return state.patient;
  });

  useEffect(() => {
    messageListRef.current.lastChild.scrollIntoView();
    inputRef.current.focus();

    if (lastElement.message.includes("{")) {
      const reqMsg = lastElement.message;
      let init = reqMsg.indexOf("{");
      let fin = reqMsg.indexOf("}");
      let json = reqMsg.substr(init, fin - init + 1);
      const jsonObject = JSON.parse(json);

      async function cool() {
        let finalData = {
          name: jsonObject.name,
          email: patient.email,
          photo: patient.photo,
          age: jsonObject.age,
          gender: jsonObject.gender,
          height: jsonObject.height,
          weight: jsonObject.weight,
          allergies: jsonObject.allergies,
          otherConditions: jsonObject.otherConditions,
          medications: jsonObject.medications,
          overview: jsonObject.overview,
          token: patient.token,
        };
        try {
          const { data } = await register(finalData);

          dispatch(
            loginSuccess({
              id: data.id,
            })
          );
          setCookie(
            "patient",
            {
              id: data.id,
            },
            { path: "/" }
          );
        } catch (error) {
          console.error(error);
        }
      }

      cool();
    }

    if (!patient.isLoggedIn) {
      navigate("/login");
    }
    if (
      patient.isLoggedIn &&
      registerResults.data &&
      registerResults.data.status === 200
    ) {
      navigate("/");
      toast.success("Welcome");
    }

    if (
      patient.isLoggedIn &&
      registerResults.data &&
      registerResults.data.status === 400
    ) {
      navigate("/login");
      toast.warn(registerResults.data.message);
    }
  }, [navigate, registerResults.data, patient.isLoggedIn, messages]);

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
