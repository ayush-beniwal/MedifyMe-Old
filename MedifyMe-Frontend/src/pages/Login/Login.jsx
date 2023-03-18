import styles from "./Login.module.css";
import { useGoogleLogin } from "@react-oauth/google";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useGLogin } from "../../hooks/use-gLogin";

function Login() {
  const navigate = useNavigate();
  const { handleGoogleLogin, loginResults } = useGLogin();

  const patient = useSelector((state) => {
    return state.patient;
  });

  console.log(patient);
  console.log(loginResults);

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
      toast.success(`Welcome ${patient.name}`);
    }
  }, [loginResults.data, navigate, patient.isLoggedIn, patient.name]);

  return (
    <button disabled={loginResults.isLoading} onClick={() => loginHandler()}>
      Signin
    </button>
  );
}

export default Login;
