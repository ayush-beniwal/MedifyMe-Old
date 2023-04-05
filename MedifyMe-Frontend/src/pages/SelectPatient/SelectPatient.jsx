import styles from "./SelectPatient.module.css";
import { useGoogleLogin } from "@react-oauth/google";
// import { useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGLogin } from "../../hooks/useGLogin";
import Navbar from "../../components/Navbar/Navbar";
function SelectPatient() {
  const [role, setRole] = useState("patient");
  const { handleGoogleLogin, loginResults } = useGLogin(role);

  const loginHandler = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      handleGoogleLogin(tokenResponse);
    },
  });

  return (
    <>
      <Navbar />
      <div className={styles.grid_container}>
        <img
          src="doctor-illustration.svg"
          alt="doctor image"
          className={styles.left_wrapper}
        ></img>
        <div className={styles.right_wrapper}>
          <div className={styles.doctor_history}>
            <p
              className={styles.doctor_history_content}
            >
              Dr. Amit Trivedi
            </p>
          </div>

          <div className={styles.doctor_history}>
            <p className={styles.doctor_history_content}>Add New Doctors</p>
          </div>

          <div className={styles.row}>
            <div className={styles.add_doctor_info}>
              <label className={styles.add_text_doctor} htmlFor="email">
                Doctor Id:
              </label>
              <input
                className={styles.add_doctor_name}
                type="name"
                id="name"
                name="name"
                required
              />
            </div>
            <button className={styles.submit_button} type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectPatient;
