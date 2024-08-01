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
    getAllCourse: builder.query({
      query: () => ({
        url: "course",
        method: "GET",
      }),
    }),
    updateCourse: builder.mutation({
      query: ({ id, updateData }) => {
        console.log(id,"api")
        return {
          url: `update-course/${id}`,
          method: "PUT",
          body: updateData,
          credentials: "include",
        };
      },
    }),
  }),
});
export const {
  useCreateCourseMutation,
  useGetAllCourseQuery,
  useUpdateCourseMutation,
} = courseApi;
