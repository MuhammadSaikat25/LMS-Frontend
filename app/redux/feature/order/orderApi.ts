import { baseApi } from "../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: () => {
        return {
          url: `get-allOrder`,
          method: "GET",
          credentials: "include",
        };
      },
    }),
   
  }),
});

export const { useGetAllOrdersQuery} = orderApi;
