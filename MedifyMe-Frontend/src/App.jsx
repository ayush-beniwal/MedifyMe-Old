import Home from "./pages/Home/Home";
import Account from "./components/Account/Account";
import Payments from "./components/Payments/Payments";
import Login from "./pages/Login/Login";
import Health_history_form from "./pages/Health_history_form/Health_history_form";
import Register from "./pages/Register/Register";
import Prescription_form from "./pages/Prescription_form/Prescription_form";
import Health_history from "./pages/HealthHistory/HealthHistory";
import Manage_doctors from "./components/Manage_doctors/Manage_doctors";
import Manage_patients from "./components/Manage_patients/Manage_patients";
import Add_report from "./pages/Add_report/Add_report";
import Appointment from "./pages/Appointment/Appointment";
import Manage_Patients from "./pages/Doctor/Manage_Patients/Manage_Patients";
import Current_Prescription from "./pages/Doctor/Current_Prescription/Current_Prescription";
import Test_Report from "./pages/Doctor/Test_Report/Test_Report";
import Patient_Health_History from "./pages/Doctor/Patient_Health_History/Patient_Health_History"
import Prescription from "./pages/Prescription/Prescription";
import Test from "./pages/Test/Test";
import Settings from "./pages/Settings/Settings";
import SelectPatient from "./pages/SelectPatient/SelectPatient";
// import RoomPage from "./pages/Rooms/Rooms";
// import Video_chat from "./pages/Video_chat/video_chat";

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
import Loading from "./components/Loading/Loading";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="health_history" element={<Health_history />} />
      <Route path="healthHistoryForm" element={<Health_history_form />} />
      <Route path="prescription_form" element={<Prescription_form />} />
      <Route path="addreports" element={<Add_report />} />
      <Route path="appointment" element={<Appointment />} />
      <Route path="prescription" element={<Prescription />} />
      <Route path="test" element={<Test />} />
      <Route path="Loading" element={<Loading />} />
      <Route path="SelectPatient" element={<SelectPatient />} />
      {/* <Route path="room" element={<RoomPage />} /> */}
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
        <Route
          path="manage_patients"
          element={
            <Settings>
              <Manage_patients />
            </Settings>
          }
        />
        <Route
          path="doc_payment_settings"
          element={
            <Settings>
              <Payments />
            </Settings>
          }
        />
      </Route>
      <Route path="manage_patients" element={<Manage_Patients />} />
      <Route path="current_prescription" element={<Current_Prescription />} />
      <Route path="test_report" element={<Test_Report/>}/>
      <Route path="patient_health_history" element={<Patient_Health_History/>}/>
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
      cookies.patient &&
      cookies.patient.id &&
      cookies.patient.token &&
      cookies.patient.email &&
      cookies.patient.photo &&
      cookies.patient.role &&
      cookies.patient.name &&
      cookies.patient.age &&
      cookies.patient.gender &&
      cookies.patient.height &&
      cookies.patient.weight &&
      cookies.patient.allergies &&
      cookies.patient.otherConditions &&
      cookies.patient.medications &&
      cookies.patient.overview
    ) {
      dispatch(
        loginSuccess({
          token: cookies.patient.token,
          id: cookies.patient.id,
          email: cookies.patient.email,
          photo: cookies.patient.photo,
          role: cookies.patient.role,
          name: cookies.patient.name,
          age: cookies.patient.age,
          gender: cookies.patient.gender,
          height: cookies.patient.height,
          weight: cookies.patient.weight,
          allergies: cookies.patient.allergies,
          otherConditions: cookies.patient.otherConditions,
          medications: cookies.patient.medications,
          overview: cookies.patient.overview,
        })
      );
    }
  }, [cookies.patient, dispatch, patient.isLoggedIn]);

  return <RouterProvider router={router} />;
}

export default App;