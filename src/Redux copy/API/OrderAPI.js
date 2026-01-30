import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const OrderAPI = createApi({
  reducerPath: "OrderAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://maison-aditi-backend.onrender.com/api/v1/users/order/",
    credentials: "include",
  }),
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (orderPayload) => ({
        url: "createOrder",
        method: "POST",
        body: orderPayload,
      }),
      invalidatesTags: ["Orders"],
    }),

    getOrders: builder.query({
      query: () => "getAllOrder",
      providesTags: ["Orders"],
    }),

    // getOrderById: builder.query({
    //   query: (orderId) => `getOrderById/${orderId}`,
    //   providesTags: ["Orders"],
    // })
    getMyOrders: builder.query({
      query: () => "getMyOrders",
      providesTags: ["Orders"],
    }),
  }),
});

export const {
 useCreateOrderMutation,
 useGetOrdersQuery,
//  useGetOrderByIdQuery
useGetMyOrdersQuery
} = OrderAPI;