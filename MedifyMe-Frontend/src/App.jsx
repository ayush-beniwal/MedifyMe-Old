import Home from "./pages/Home/Home";
import Account from "./pages/Account/Account";
import Manage_docters from "./pages/Manage_docters";
import Login from "./pages/Login/Login";
import Health_history from "./pages/Health_history/Health_history";
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
      <Route path="manage_docters" element={<Manage_docters />} />
      <Route path="health_history" element={<Health_history />} />
      {/* <Route path="*" element={<Error404 />} /> */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
