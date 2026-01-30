import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UsersAPI = createApi({
  reducerPath: "UsersAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://maison-aditi-backend.onrender.com/api/v1/users/",
    // baseUrl: "http://localhost:5000/api/v1/users/",

    credentials: "include",
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    directLogin: builder.mutation({
      query: (userData) => ({
        url: "direct-login",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["Users"],
    }),

    getUserProfile: builder.query({
      query: () => "profile",
      method: "GET",
      providesTags: ["Users"],
    }),
    getme: builder.query({
      query: () => "getme",
      method: "GET",
      providesTags: ["Users"],
    }),
    sendOtp: builder.mutation({
      query: (data) => ({
        url: "send-otp",
        method: "POST",
        body: data,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (data) => ({
        url: "verify-otp",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useDirectLoginMutation,
  useGetmeQuery,
  useGetUserProfileQuery,
  useSendOtpMutation,
  useVerifyOtpMutation,
} = UsersAPI;
