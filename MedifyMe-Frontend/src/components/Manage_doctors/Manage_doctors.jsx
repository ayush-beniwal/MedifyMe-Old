import styles from "./Manage_doctors.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../../store";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";



function Manage_doctors() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["patient"]);

  const patient = useSelector((state) => {
    return state.patient;
  });

  const handleClick = () => {
    if (patient.isLoggedIn) {
      dispatch(logoutSuccess());
      removeCookie("patient", { path: "/" });
      toast.info("See You Soon!!");
      navigate("/");
    }
    if (!patient.isLoggedIn) {
      navigate("/login");
    }
  };

  return (
    <div className={styles.right_wrapper}>
      <div className={styles.logout}>
        <button onClick={handleClick} className={styles.logout_link}>
          Logout
        </button>
      </div>
      <div className={styles.doctor_history}>
        <p className={`${styles.doctor_history_content} ${styles.firstdoc}`}>Doctor History</p>
      </div>

      <div className={styles.doctor}>
        <p className={styles.doctor_name}>1. Dr Karen Davis</p>
        <p className={styles.doctor_contact}>03/07/2023 to 24/07/2023</p>
      </div>

      <div className={styles.doctor}>
        <p className={styles.doctor_name}>2. Dr John Smith</p>
        <p className={styles.doctor_contact}>03/07/2023 to 24/07/2023</p>
      </div>

      <div className={styles.doctor}>
        <p className={styles.doctor_name}>3.Dr. Maria Gonzalez</p>
        <p className={styles.doctor_contact}>03/07/2023 to 24/07/2023</p>
      </div>
      <div className={styles.doctor}>
        <p className={styles.doctor_name}>3.Dr. Maria Gonzalez</p>
        <p className={styles.doctor_contact}>03/07/2023 to 24/07/2023</p>
      </div>

      <div className={styles.doctor_history}>
        <p className={styles.doctor_history_content}>Current Doctor</p>
      </div>

      <div className={styles.doctor}>
        <p className={styles.doctor_name}>3.Dr. Maria Gonzalez</p>
        <p className={styles.doctor_contact}>03/07/2023 to 24/07/2023</p>
      </div>

      <div className={styles.doctor}>
        <p className={styles.doctor_name}>3.Dr. Maria Gonzalez</p>
        <p className={styles.doctor_contact}>03/07/2023 to 24/07/2023</p>
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
  );
}

export default Manage_doctors;
