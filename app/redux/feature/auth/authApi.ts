import { baseApi } from "../api/baseApi";
import { registration } from "./authSlice";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/login-user",
        method: "POST",
        body: userInfo,
        credentials: "include",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            registration({
              token: result.data.token,
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
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
