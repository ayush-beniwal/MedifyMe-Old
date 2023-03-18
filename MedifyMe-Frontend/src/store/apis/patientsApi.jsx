import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const server = import.meta.env.REACT_APP_SERVER_URL;

const patientApi = createApi({
  reducerPath: "patientAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:6969/patients`,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (token) => ({
        url: "/login",
        method: "POST",
        body: { googleAccessToken: token },
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: { data },
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = patientApi;
export { patientApi };
