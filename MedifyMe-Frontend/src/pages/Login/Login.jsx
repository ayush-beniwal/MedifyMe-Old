import styles from "./Login.module.css";
import { useGoogleLogin } from "@react-oauth/google";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGLogin } from "../../hooks/use-gLogin";
import Navbar from "../../components/Navbar/Navbar";
function Login() {
  const navigate = useNavigate();
  const [isWhat, setIsWhat] = useState("patient");
  const { handleGoogleLogin, loginResults } = useGLogin();

  const patient = useSelector((state) => {
    return state.patient;
  });

  // console.log(patient);
  // console.log(loginResults);

  const loginHandler = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      handleGoogleLogin(tokenResponse);
    },
  });

  useEffect(() => {
    if (
      patient.isLoggedIn &&
      loginResults.data &&
      loginResults.data.status === 212
    ) {
      navigate("/register");
      toast.warn(loginResults.data.message);
    }

    if (
      patient.isLoggedIn &&
      loginResults.data &&
      loginResults.data.status === 200
    ) {
      navigate("/");
      toast.success(`Welcome`);
    }
  }, [loginResults.data, navigate, patient.isLoggedIn, patient.name]);

  return (
    <>
      <Navbar />
      <div className={styles.grid_container}>
        <div className={styles.left_wrapper}>
          <div className={styles.card}>
            <div>
              <h2 className={styles.content_left_wrapper}>
                Manage your Health,not just your Records
              </h2>
            </div>
            <img src="Group 9424.png" alt="" className={styles.img2} />
          </div>
        </div>
        <div className={styles.right_wrapper}>
          <h4 className={styles.login_content}>
            Verify Yourself to Proceed Further
          </h4>
          <div className={styles.for_inline}>
            <label className={styles.patients_input} htmlFor="sex">
              I am a:
            </label>
            <select
              className={styles.input_text1}
              id="sex"
              name="sex"
              value={isWhat}
              onChange={(e) => setIsWhat(e.target.value)}
              required
            >
              <option className={styles.usertype} value="patient">
                Patient
              </option>
              <option className={styles.usertype} value="docter">
                Doctor
              </option>
            </select>

            <button
              className={styles.google_login_b}
              disabled={loginResults.isLoading}
              onClick={() => loginHandler()}
            >
              <span className={styles.google_p}>
                {loginResults.isLoading
                  ? "Logging in..."
                  : "Sign in with google"}
              </span>
            </button>

            <div className={styles.login_lowerpart}>
              <img src="pose_1.png" alt="" className={styles.img3} />
              <p className={styles.login_lower_content}>
                First time users will be asked a few questions by our AI Powered
                Chatbot to begin their journey!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
