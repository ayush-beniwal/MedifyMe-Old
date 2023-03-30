import Home from "./pages/Home/Home";
import Account from "./components/Account/Account";
import Payments from "./components/Payments/Payments";
import Loading from "./components/Loading/Loading";
import Login from "./pages/Login/Login";
import Health_history_form from "./pages/Health_history_form/Health_history_form";
import Register from "./pages/Register/Register";
import Prescription_form from "./pages/Prescription_form/Prescription_form";
import Health_history from "./pages/HealthHistory/HealthHistory";
import Manage_doctors from "./components/Manage_doctors/Manage_doctors";
import Add_report from "./pages/Add_report/Add_report";
import Appointment from "./pages/Appointment/Appointment";
import Prescription from "./pages/Prescription/Prescription";
import Test from "./pages/Test/Test";
import Settings from "./pages/Settings/Settings";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, logoutSuccess } from "./store";

import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path="loading" element={<Loading />} />
      {/* <Route path="account" element={<Account />} /> */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      {/* <Route path="payments" element={<Payments />} /> */}
      <Route path="healthHistoryForm" element={<Health_history_form />} />
      <Route path="health_history" element={<Health_history />} />
      <Route path="prescription_form" element={<Prescription_form />} />
      {/* <Route path="manage_doctors" element={<Manage_doctors />} /> */}
      <Route path="addreports" element={<Add_report />} />
      <Route path="appointment" element={<Appointment />} />
      <Route path="prescription" element={<Prescription />} />
      <Route path="test" element={<Test />} />
      <Route path="settings">
        <Route
          path="account"
          element={
            <Settings>
              <Account />
            </Settings>
          }
        />
        <Route
          path="manage_doctors"
          element={
            <Settings>
              <Manage_doctors />
            </Settings>
          }
        />
        <Route
          path="payment"
          element={
            <Settings>
              <Payments />
            </Settings>
          }
        />
      </Route>
      {/* <Route path="chatbot" element={<Chatbot />} /> */}
      {/* <Route path="*" element={<Error404 />} /> */}
    </Route>
  )
);

function App() {
  const patient = useSelector((state) => {
    return state.patient;
  });

  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies(["patient"]);

  useEffect(() => {
    if (
      cookies.user &&
      !patient.isLoggedIn &&
      cookies.user.id &&
      cookies.user.token &&
      cookies.user.email &&
      cookies.user.photo
    ) {
      dispatch(
        loginSuccess({
          token: cookies.user.token,
          id: cookies.user.id,
          email: cookies.user.email,
          photo: cookies.user.photo,
        })
      );
    }
  }, [cookies.patient, dispatch, patient.isLoggedIn]);

  return <RouterProvider router={router} />;
}

export default App;
