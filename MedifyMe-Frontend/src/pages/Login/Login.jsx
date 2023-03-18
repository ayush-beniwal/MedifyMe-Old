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
    <button disabled={loginResults.isLoading} onClick={() => loginHandler()}>
      Signin
    </button>
  );
}

export default Login;
