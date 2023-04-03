import { useLoginMutation } from "../store";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store";
import { useCookies } from "react-cookie";
import { useCallback } from "react";

export function useGLogin(role) {
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
        console.log("detail:", detail);
        console.log("Role:", role);
        const { data } = await login(detail);

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
      } catch (error) {
        console.error(error);
      }
    },
    [dispatch, login, setCookie]
  );

  return { handleGoogleLogin, loginResults };
}
