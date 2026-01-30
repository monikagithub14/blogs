import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AddressAPI = createApi({
  reducerPath: "AddressAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://maison-aditi-backend.onrender.com/api/v1/users/",
    credentials: "include",
  }),
  tagTypes: ["Address"],
  endpoints: (builder) => ({
    addAddress: builder.mutation({
      query: (address) => ({
        url: "cart/addAddress",
        method: "POST",
        body: address,
      }),
      invalidatesTags: ["Address"],
    }),
    submitContactForm: builder.mutation({
      query: (address) => ({
        url: "cart/addAddress",
        method: "POST",
        body: address,
      }),
      invalidatesTags: ["Address"],
    }),
    getlastAddress: builder.query({
      query: () => "cart/lastAddress",
      method: "GET",
      providesTags: ["Address"],
    }),
    deleteAddress: builder.mutation({
      query: (addressId) => ({
        url: `/address/delete/${addressId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Address"],
    }),
  }),
});

export const {
  useAddAddressMutation,
  useGetlastAddressQuery,
  useDeleteAddressMutation,
  useSubmitContactFormMutation,
} = AddressAPI;
