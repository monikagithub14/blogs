import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; 

export const ProductsAPI = createApi({
  reducerPath: "ProductsAPI",
  baseQuery: fetchBaseQuery({
    // baseUrl: import.meta.env.VITE_BACKEND_URL,
    baseUrl: "https://maison-aditi-backend.onrender.com/api/v1/users/product/",
    credentials: "include",
  }),
  tagTypes: ["Products"],

  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "allProducts",
        method: "GET",
      }),
      providesTags: ["Products"],
      transformResponse: (res) => {
        console.log(res);
        return res;
      },
    }),
    getProductByName: builder.query({
      query: (productName) => ({
        url: `/allProducts/name/${encodeURIComponent(productName)}`,
        method: "GET",
      }),
      providesTags: ["Products"],
    }),

    // /allProducts/:id
    getProductById: builder.query({
      query: (id) => ({
        url: `/allProducts/${id}`,
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
  }),
});

export const {
useGetAllProductsQuery,
useGetProductByNameQuery,
useGetProductByIdQuery
} = ProductsAPI;
