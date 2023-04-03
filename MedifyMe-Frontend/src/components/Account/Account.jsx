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
          <label for="profile-pic"className={styles.color1} htmlFor="profile-pic">
            <span>Profile Picture:</span>
            <img src="..\public\Frame 21.png" className={styles.profile_img}></img>
            <span className={styles.span}>&nbsp;Upload Image</span>
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
            placeholder="Name"
            required
          />
        </div>


        <div className={styles.row_sex_age}>
          <label className={styles.color} htmlFor="gender">
            Gender:
          </label>
          <select className={styles.input_text_row_sex} id="gender" name="gender" required>
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        
          <label className={styles.color} htmlFor="age">
            Age:
          </label>
          <input
            className={styles.input_text_row_age}
            type="text"
            id="age"
            name="age"
            placeholder="Age"
            required
          />
        </div>

        <div className={styles.row}>
          <label className={styles.color} htmlFor="email">
            Email address:
          </label>
          <input
            className={styles.input_text}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>

        <div className={styles.row}>
          <label className={styles.color} htmlFor="mobile">
            Mobile number:
          </label>
          <input
            className={styles.input_text}
            type="tel"
            id="mobile"
            name="mobile"
            placeholder="Mobile No."
            required
          />
        </div>
        <button className={styles.submit_button} type="submit">
          Update
        </button>
      </form>
    </div>
  );
}

export default Account;
