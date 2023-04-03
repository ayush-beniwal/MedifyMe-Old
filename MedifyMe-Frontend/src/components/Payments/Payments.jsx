import styles from "./Payments.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../../store";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";



function Payments() {
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
      <img
        className={styles.img_payment}
        src={import.meta.env.BASE_URL + "image 4.png"}
        alt="payment"
        width="500"
        height="600"
      />
      <div className={styles.payments_content}>No Payments to show!</div>
    </div>
  );
}

export default Payments;
