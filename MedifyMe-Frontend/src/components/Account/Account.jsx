import styles from "./Account.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../../store";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

function Account() {
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
      <form>
        <div className={styles.row}>
          <label className={styles.color} htmlFor="profile-pic">
            Profile Picture:
          </label>
          <input
            className={styles.input_profile}
            type="file"
            id="profile-pic"
            name="profile-pic"
          />
        </div>

        <div className={styles.row}>
          <label className={styles.color} htmlFor="name">
            Name:
          </label>
          <input
            className={styles.input_text}
            type="text"
            id="name"
            name="name"
            value="name"
            required
          />
        </div>

        <div className={styles.row_sex_age}>
          <label className={styles.color} htmlFor="sex">
            Sex:
          </label>
          <select className={styles.input_text} id="sex" name="sex" required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label className={styles.color} htmlFor="age">
            Age:
          </label>
          <input
            className={styles.input_text}
            type="text"
            id="age"
            name="age"
            value="age"
            required
          />
        </div>

        <div className={styles.row}>
          <label className={styles.color} htmlFor="email">
            Email Address:
          </label>
          <input
            className={styles.input_text}
            type="email"
            id="email"
            name="email"
            value="Email"
            required
          />
        </div>

        <div className={styles.row}>
          <label className={styles.color} htmlFor="mobile">
            Mobile Number:
          </label>
          <input
            className={styles.input_text}
            type="tel"
            id="mobile"
            name="mobile"
            value="Mobile No."
            required
          />
        </div>
      </form>
      <button className={styles.submit_button} type="submit">
        Submit
      </button>
    </div>
  );
}

export default Account;
