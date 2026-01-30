import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CartAPI = createApi({
  reducerPath: "CartAPI",
  baseQuery: fetchBaseQuery({
    baseUrl:"https://maison-aditi-backend.onrender.com/api/v1/users/cart/",
    // baseUrl: "http://localhost:5000/api/v1/users/cart/",
    prepareHeaders: (headers) => {
      // This ensures cookies are sent with every request
      return headers;
    },
    credentials: "include",
  }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => "getAllCart",
      providesTags: ["Cart"],
    }),

    addToCart: builder.mutation({
      query: (cartItem) => ({
        url: "addToCart",
        method: "POST",
        body: cartItem,
      }),
      invalidatesTags: ["Cart"],
    }),

    removeFromCart: builder.mutation({
      query: (itemId) => ({
        url: `removeFromCart/${itemId}`, 
        method: 'DELETE',
      }),
      invalidatesTags: ['Cart'],
    })
    
  }),
});

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation
} = CartAPI;