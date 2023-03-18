import Home from "./pages/Home/Home";
import Account from "./pages/Account/Account";
import Payments from "./pages/Payments";
import Login from "./pages/Login/Login";
import Health_history_form from "./pages/Health_history_form/Health_history_form";
import Register from "./pages/Register/Register";
import Prescription_from from "./pages/Prescription_form/Prescription_form";
import Health_history from "./pages/HealthHistory/HealthHistory";
import Manage_doctors from "./pages/Manage_doctors/Manage_doctors";
import Prescription from "./pages/Prescription/Prescription";

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
      <Route path="account" element={<Account />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="payments" element={<Payments />} />
      <Route path="healthHistoryForm" element={<Health_history_form />} />
      <Route path="health_history" element={<Health_history />} />
      <Route path="prescription_form" element={<Prescription_from />} />
      <Route path="manage_doctors" element={<Manage_doctors />} />
      <Route path="prescription" element={<Prescription />} />
      {/* <Route path="chatbot" element={<Chatbot />} /> */}
      {/* <Route path="*" element={<Error404 />} /> */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
