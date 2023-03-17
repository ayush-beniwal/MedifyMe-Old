import Home from "./pages/Home";
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
      <Route
        index
        element={
          <>
            <Home />
          </>
        }
      />
      {/* <Route path="*" element={<Error404 />} /> */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
