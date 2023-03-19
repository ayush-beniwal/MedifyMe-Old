import Navbar from "../../components/Navbar/Navbar";
import styles from "./Health_history_form.module.css";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { useHealthFormMutation } from "../../store";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const [doctorName, setDoctorName] = useState("");
  const [date, setDate] = useState("");
  const [doctorComments, setDoctorComments] = useState("");
  const [patientComments, setPatientComments] = useState("");
  const patient = useSelector((state) => {
    return state.patient;
  });

  const [form, formResults] = useHealthFormMutation(patient.id);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let finalData = {
      doctorName,
      date,
      doctorComments,
      patientComments,
      id: patient.id,
    };
    try {
      const { data } = await form(finalData);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.health_history}>
        <form onSubmit={handleSubmit} className={styles.health_history_form}>
          <h1 className={styles.header}>Health History Form</h1>
          <label className={styles.docter_name} htmlFor="doctor-name">
            Doctor Name:
          </label>
          <input
            className={styles.health_input}
            type="text"
            id="doctor-name"
            name="doctor-name"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
            required
          />
          <label className={styles.text_health} htmlFor="date">
            Date:
          </label>
          <input
            className={styles.health_input}
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <label className={styles.text_health} htmlFor="doctor-comments">
            Doctor Comments:
          </label>
          <textarea
            value={doctorComments}
            onChange={(e) => setDoctorComments(e.target.value)}
            id="doctor-comments"
            name="doctor-comments"
          ></textarea>

          <label className={styles.text_health} htmlFor="patient-comments">
            Patient Comments:
          </label>
          <textarea
            value={patientComments}
            onChange={(e) => setPatientComments(e.target.value)}
            id="patient-comments"
            name="patient-comments"
          ></textarea>

          <label className={styles.text_health} htmlFor="file-upload">
            Upload Files:
          </label>
          <input
            className={styles.health_file}
            type="file"
            id="file-upload"
            name="file-upload"
          />

          <button className={styles.submit_button} type="submit">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Home;
