import Home from "./pages/Home/Home";
import Account from "./pages/Account/Account";
import Manage_docters from "./pages/Manage_docters";
import Login from "./pages/Login/Login";
import Health_history_form from "./pages/Health_history_form/Health_history_form";
import Register from "./pages/Register/Register";
import Health_history from "./pages/HealthHistory/healtH";
// import Chatbot from "./components/Chatbot/Chatbot";
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
      <Route path="manage_docters" element={<Manage_docters />} />
      <Route path="healthHistoryForm" element={<Health_history_form />} />
      <Route path="health_history" element={<Health_history />} />
      {/* <Route path="chatbot" element={<Chatbot />} /> */}
      {/* <Route path="*" element={<Error404 />} /> */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
