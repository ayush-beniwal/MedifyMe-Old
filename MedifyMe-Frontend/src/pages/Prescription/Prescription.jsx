import Navbar from "../../components/Navbar/Navbar";
import styles from "./Prescription.module.css";
import { Link } from "react-router-dom";
import useChatGPT from "../../hooks/useChatGPT";
import { useRef, useEffect } from "react";

function Prescription() {
  const { messages, handleSend } = useChatGPT({
    content:
      "I want you to generate an initial message as ayukumi , and you will take the users doubts about his medicine dosage , frequency , allergy compatibility etc. You need to ask these one by one and wait for user input.  First Ask the user for medicine name ,  and wait for user input. Second and then ask him what doubt he is facing. In case the user says he is facing some issue due to a particular medicine intake, look up potential ways to ease that and suggest them as first measures. Also tell you will notify the doctor if you find that the problem is too severe. Now generate a welcome message for the user",
    InitialMessage:
      "Hello! I am Ayukumi, your personal healthcare assistant. How may I assist you today? Please let me know the name of the medicine you have a query about.",
  });
  const messageListRef = useRef(null);
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    const inputValue = inputRef.current.value;
    handleSend(inputValue);
    inputRef.current.value = "";

    useEffect(() => {
      messageListRef.current.lastChild.scrollIntoView();
      inputRef.current.focus();
    }, [messages]);
  };
  return (
    <>
      <Navbar />
      <div className={styles.PreH}>
        <div className={styles.t1}>Prescription History</div>
        <div className={styles.docs}>
          <div className={styles.doc1}>
            <div className={styles.date}>20 Jan 2023</div>
            <div className={styles.c}>
              <img src="" />
            </div>
          </div>
          <div className={styles.doc1}>
            <div className={styles.date}>18 Jan 2023</div>
          </div>
          <div className={styles.doc1}>
            <div className={styles.date}>2 Jan 2023</div>
          </div>
          <div className={styles.doc1}>
            <div className={styles.date}>5 Dec 2022</div>
          </div>
          <div className={styles.doc1}>
            <div className={styles.date}>16 Nov 2022</div>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <Link to="/prescription_form">
          <div className={styles.b}>Create New Record</div>
        </Link>
      </div>
      <div className={styles.currMed}>
        <div className={styles.t1}>Current Medications</div>
        <div className={styles.cm}>
          <div className={styles.title}>
            <div className={styles.namet}>Name</div>
            <div className={styles.dosaget}>Dosage</div>
          </div>
          <div className={styles.con}>
            <ol>
              <li>
                Amoxicillin: <span className={styles.d}>x1/day</span>
              </li>
              <li>
                Benzocaine: <span className={styles.d}>x1/day</span>
              </li>
              <li>
                Ibuprofen: <span className={styles.d}>x1/day</span>
              </li>
              <li>
                hlorhexidine mouthwash: <span className={styles.d}>x1/day</span>
              </li>
            </ol>
          </div>
        </div>
        <div className={styles.inst}>
          <a href="">
            <div className={styles.b}>Instructions</div>
          </a>
        </div>
        <div className={styles.dinfo}>
          <ol>
            <li>
              Lipitor (atorvastatin) - usually taken once daily with or without
              food, with dosages ranging from 10mg to 80mg depending on the
              individual's cholesterol levels and medical history.
            </li>
            <li>
              Zoloft (sertraline) - usually taken once daily with or without
              food, with dosages ranging from 25mg to 200mg depending on the
              individual's condition and response to the medication.
            </li>
            <li>
              Zoloft (sertraline) - usually taken once daily with or without
              food, with dosages ranging from 25mg to 200mg depending on the
              individual's condition and response to the medication.
            </li>
          </ol>
        </div>
      </div>
      <div className={styles.currentPres}>
        <div className={styles.ct}>
          <div className={styles.ct1}>Current Prescription</div>
          <div className={styles.ct2}>20 Jan 2023</div>
        </div>
        <div className={styles.cont}>
          <div className={styles.accordian}>
            {messages.map((message, i) => (
              <div
                key={i}
                className={`${
                  message.sender === "ChatGPT"
                    ? styles.incoming
                    : styles.outgoing
                }`}
              >
                <div className={styles.messageText}>{message.message}</div>
              </div>
            ))}
          </div>
          <div className={styles.photo}>
            <img src="PrescribtionImage.jpg" />
          </div>

          <div className="row">
            <input
              className={styles.input_text}
              type="text"
              placeholder="Enter your message here"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSend(e.target.value);
                  e.target.value = "";
                }
              }}
              ref={inputRef}
              required
            />
          </div>
          <div className={styles.bt}>
            <button onClick={handleButtonClick} className={styles.button_size}>
              <img src="Black.png" className={styles.img_size} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Prescription;
