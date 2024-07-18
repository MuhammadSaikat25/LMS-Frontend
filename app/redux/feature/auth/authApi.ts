import { baseApi } from "../api/baseApi";


const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/login-user",
        method: "POST",
        body: userInfo,
        credentials: "include",
      }),
    }),
    registration: builder.mutation({
      query: (userInfo) => {
        return {
          url: "/register-user",
          method: "POST",
          body: userInfo,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegistrationMutation } = authApi;
