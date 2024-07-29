import { baseApi } from "../api/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateAvatar: builder.mutation({
      query: (avatar) => ({
        url: "/update-user-avatar",
        method: "POST",
        body: {avatar},
        credentials: "include",
      }),
    }),
  }),
});
export const{useUpdateAvatarMutation}=userApi