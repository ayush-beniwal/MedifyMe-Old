import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { CookiesProvider } from "react-cookie";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CookiesProvider>
    <Provider store={store}>
      <GoogleOAuthProvider clientId="964624758507-h2585qlktjcv0r9nsnvi7tnjbe08vf5d.apps.googleusercontent.com">
        <ToastContainer />
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </CookiesProvider>
);
