import { configureStore } from "@reduxjs/toolkit";
import {
  patientReducer,
  loginSuccess,
  logoutSuccess,
} from "./slices/patientsSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { patientApi } from "./apis/patientsApi";

const store = configureStore({
  reducer: {
    patient: patientReducer,
    [patientApi.reducerPath]: patientApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(patientApi.middleware);
  },
});

setupListeners(store.dispatch);

export { store, loginSuccess, logoutSuccess };
export { useLoginMutation, useRegisterMutation } from "./apis/patientsApi";
