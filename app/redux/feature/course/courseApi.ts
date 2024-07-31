import { baseApi } from "../api/baseApi";

const courseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: (data) => ({
        url: "create-course",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    getAllCourse:builder.query({
      query:()=>({
        url:"course",
        method:"GET"
      })
    })
  }),
});
export const { useCreateCourseMutation,useGetAllCourseQuery } = courseApi;
