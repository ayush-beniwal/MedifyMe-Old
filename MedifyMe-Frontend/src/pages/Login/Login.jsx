import styles from "./Login.module.css";
import { useGoogleLogin } from "@react-oauth/google";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useGLogin } from "../../hooks/use-gLogin";
import AccountCard from "../../components/AccountCard/AccountCard";
function Login() {
  const navigate = useNavigate();
  const { handleGoogleLogin, loginResults } = useGLogin();

  const user = useSelector((state) => {
    return state.user;
  });

  console.log(user);
  console.log(loginResults);

  const loginHandler = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      handleGoogleLogin(tokenResponse);
    },
  });

  // useEffect(() => {
  //   if (
  //     user.isLoggedIn &&
  //     loginResults.data &&
  //     loginResults.data.status === 212
  //   ) {
  //     navigate("/register");
  //     toast.warn(loginResults.data.message);
  //   }

  //   if (loginResults.data && loginResults.data.status === 210) {
  //     toast.warn(loginResults.data.message);
  //   }

  //   if (
  //     user.isLoggedIn &&
  //     loginResults.data &&
  //     loginResults.data.status === 200
  //   ) {
  //     navigate("/");
  //     toast.success(`Welcome ${user.name}`);
  //   }
  // }, [loginResults.data, navigate, user.isLoggedIn, user.name]);

  return (
    <div className={styles.grid_container}>
        <div className={styles.left_wrapper}>
        <div className={styles.card}>
        <div>
          <h2 className={styles.content_left_wrapper}>Manage your Health,not just your Records</h2>
        </div>
        <img src="Group 9424.png" alt="" className={styles.img2} />
      </div>
        </div>
        <div className={styles.right_wrapper}>
         <h4 className={styles.login_content}>Verify Yourself to Proceed Further</h4>
         <div className={styles.for_inline}>


         <label className={styles.patients_input} htmlFor="sex">
                I am a:
              </label>
              <select
                className={styles.input_text1}
                id="sex"
                name="sex"
                required
              >
                <option value=""></option>
                <option value="male">Patient</option>
                <option value="male">Docter</option>
              </select>
            


         </div>
        
        </div>
      </div>
  );
}

export default Login;
