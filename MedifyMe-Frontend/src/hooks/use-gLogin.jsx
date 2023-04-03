import { useLoginMutation } from "../store";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store";
import { useCookies } from "react-cookie";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function useGLogin(role) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies([role]);
  const [login, loginResults] = useLoginMutation();

  const handleGoogleLogin = useCallback(
    async (tokenResponse) => {
      try {
        let detail = {
          googleAccessToken: tokenResponse.access_token,
          role: role,
        };
        const { data } = await login(detail);
        if (data.foundPatient && data.status === 200) {
          dispatch(
            loginSuccess({
              token: data.foundPatient.token,
              id: data.foundPatient._id,
              email: data.foundPatient.email,
              photo: data.foundPatient.photo,
              role: role,
              name: data.foundPatient.name,
              age: data.foundPatient.age,
              gender: data.foundPatient.gender,
              height: data.foundPatient.height,
              weight: data.foundPatient.weight,
              allergies: data.foundPatient.allergies,
              otherConditions: data.foundPatient.otherConditions,
              medications: data.foundPatient.medications,
              overview: data.foundPatient.overview,
            })
          );
          setCookie(
            role,
            {
              token: data.foundPatient.token,
              id: data.foundPatient._id,
              email: data.foundPatient.email,
              photo: data.foundPatient.photo,
              role: role,
              name: data.foundPatient.name,
              age: data.foundPatient.age,
              gender: data.foundPatient.gender,
              height: data.foundPatient.height,
              weight: data.foundPatient.weight,
              allergies: data.foundPatient.allergies,
              otherConditions: data.foundPatient.otherConditions,
              medications: data.foundPatient.medications,
              overview: data.foundPatient.overview,
            },
            { path: "/" }
          );
          navigate("/");
          toast.success(`Welcome ${data.foundPatient.name}`);
        } else {
          dispatch(
            loginSuccess({
              token: data.token,
              id: data.id,
              email: data.email,
              photo: data.photo,
              role: role,
            })
          );

          setCookie(
            role,
            {
              token: data.token,
              id: data.id,
              email: data.email,
              photo: data.photo,
            },
            { path: "/" }
          );
          navigate("/register");
          toast.warn("Ye msg fix karna hai");
        }
      } catch (error) {
        console.error(error);
      }
    },
    [dispatch, login, setCookie]
  );

  return { handleGoogleLogin, loginResults };
}
