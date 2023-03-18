import { createSlice } from "@reduxjs/toolkit";

const patientSlice = createSlice({
  name: "patient",
  initialState: {
    isLoggedIn: false,
    token: null,
    id: null,
    name: " ",
    email: " ",
    photo: " ",
    age: " ",
    gender: " ",
    number: " ",
    height: " ",
    weight: " ",
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
      state.age = action.payload.age;
      state.gender = action.payload.gender;
      state.number = action.payload.number;
      state.height = action.payload.height;
      state.weight = action.payload.weight;
    },
    logoutSuccess: (state, action) => {
      state.isLoggedIn = false;
      state.token = null;
      state.id = null;
      state.name = null;
      state.email = null;
      state.photo = null;
      state.age = null;
      state.gender = null;
      state.number = null;
      state.height = null;
      state.weight = null;
    },
  },
});

export const { loginSuccess, logoutSuccess } = patientSlice.actions;
export const patientReducer = patientSlice.reducer;
